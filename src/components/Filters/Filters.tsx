import { ChangeEvent, useEffect, useState } from 'react';
import style from './Filters.module.scss';

export interface IFilter {
	vocal?: string;
	theme?: string;
}

interface IFilterProps extends IFilter {
	/** Callback called every time the value changes */
	onFiltersChange: (props: IFilter) => void;
	vocals: string[];
}

export default function Filters(props: IFilterProps) {
	const initialFiltersState = {
		vocal: '',
		theme: '',
	};
	const [filterValues, setFilterValues] = useState(initialFiltersState);

	function handleVocalChange(e: ChangeEvent<HTMLSelectElement>) {
		setFilterValues({ ...filterValues, vocal: e.target.value });
	}

	function handleThemeChange(e: ChangeEvent<HTMLSelectElement>) {
		setFilterValues({ ...filterValues, theme: e.target.value });
	}

	useEffect(() => {
		props.onFiltersChange(filterValues);
	}, [filterValues]);

	function clearFilters() {
		setFilterValues(initialFiltersState);
	}

	return (
		<div className={style.Filters} data-testid="filters">
			<div className={style.Filters__inputs}>
				<div>
					<label htmlFor="vocal" className={style.Filters__label}>
						Ponente
					</label>
					<select
						name="vocal"
						id="vocal-select"
						onChange={(e) => handleVocalChange(e)}
						className={style.Filters__select}
						data-testid="vocal-select"
					>
						<option value="">Selecciona ponente</option>
						{props.vocals.map((vocal, i) => {
							return (
								<option key={`vocal-key-${i}`} value={vocal}>
									{vocal}
								</option>
							);
						})}
					</select>
				</div>
				<div>
					<label htmlFor="theme" className={style.Filters__label}>
						Temática
					</label>
					<select
						name="theme"
						id="theme-select"
						onChange={(e) => handleThemeChange(e)}
						className={style.Filters__select}
						data-testid="theme-select"
					>
						<option value="">Selecciona Temática</option>

						<option value="General">General</option>
						<option value="Backend">Backend</option>
						<option value="Frontend">Frontend</option>
						<option value="DevOps">DevOps</option>
					</select>
				</div>
			</div>

			<button onClick={clearFilters} className={style.Filters__button} data-testid="clear-filters-btn">
				Borrar filtros
			</button>
		</div>
	);
}
