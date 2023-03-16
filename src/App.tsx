import { useState } from 'react';
import './App.css';
import Filters, { IFilter } from './components/Filters/Filters';
import List from './components/List/List';
import useApp from './useApp';

function App() {
	const [filters, setFilters] = useState<IFilter>({});
	const { events, vocals } = useApp(filters);

	function onFiltersChanged(filters: IFilter) {
		setFilters({ ...filters });
	}

	const rooms: number[] = [1, 2];

	return (
		<div className="App">
			<header className="App-header">
				<h1>Your meetings for today</h1>
			</header>
			<main>
				<Filters onFiltersChange={onFiltersChanged} vocals={vocals} />
				<List events={events} rooms={rooms} />
			</main>
		</div>
	);
}

export default App;
