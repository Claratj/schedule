import { ChangeEvent, useRef, useState } from 'react';

export default function useFilters() {
	const initialFiltersState = {
		vocal: '',
		theme: '',
	};
	const [filterValues, setFilterValues] = useState(initialFiltersState);

	const vocalRef = useRef<HTMLSelectElement>(null);
	const themeRef = useRef<HTMLSelectElement>(null);

	function handleVocalChange(e: ChangeEvent<HTMLSelectElement>) {
		setFilterValues({ ...filterValues, vocal: e.target.value });
	}

	function handleThemeChange(e: ChangeEvent<HTMLSelectElement>) {
		setFilterValues({ ...filterValues, theme: e.target.value });
	}

	function clearFilters() {
		// safe typecast as the Dom has been already rendered and we know that vocalRef and themeRef are not null
		(vocalRef.current as HTMLSelectElement).value = '';
		(themeRef.current as HTMLSelectElement).value = '';
		setFilterValues(initialFiltersState);
	}

	return {
		filterValues,
		vocalRef,
		themeRef,
		clearFilters,
		handleThemeChange,
		handleVocalChange,
	};
}
