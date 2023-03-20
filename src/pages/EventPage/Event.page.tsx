import { useState } from 'react';
import { Link } from 'react-router-dom';
import Filters, { IFilter } from '../../components/Filters/Filters';
import List from '../../components/List/List';
import style from './EventPage.module.scss';
import useEvent from './useEvent';

export default function EventPage() {
	const [filters, setFilters] = useState<IFilter>({});
	const { lectures, vocals } = useEvent(filters);

	function onFiltersChanged(filters: IFilter) {
		setFilters({ ...filters });
	}
	const rooms: number[] = [1, 2];

	return (
		<div>
			<header className="Event-header">
				<h2>Event</h2>
				<h3>Lectures for today</h3>
			</header>
			<main className={style.Event__main}>
				<Filters onFiltersChange={onFiltersChanged} vocals={vocals} />
				<List lectures={lectures} rooms={rooms} />
			</main>
			<Link to={'/'}>
				<span className={style.Event__back}> 🔙 </span>
			</Link>
		</div>
	);
}
