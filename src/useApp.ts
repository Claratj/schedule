import { useEffect, useState } from 'react';
import { IFilter } from './components/Filters/Filters';
import eventsRepository from './repositories/events.repository';
import IEvent from './types/IEvent';

interface IAppProps extends IFilter {}

export default function useApp(props: IAppProps) {
	const [events, setEvents] = useState<IEvent[]>([]);
	const [vocals, setVocals] = useState<string[]>([]);

	async function getEvents() {
		const events = await eventsRepository.list(props);
		setEvents(events);
	}

	async function getAllVocals() {
		const events = await eventsRepository.list(props);
		setVocals([...events.map((event) => event.vocal)]);
	}

	useEffect(() => {
		getEvents();
	}, []);

	useEffect(() => {
		getAllVocals();
	}, []);

	useEffect(() => {
		getEvents();
	}, [props]);

	return {
		events,
		vocals,
	};
}
