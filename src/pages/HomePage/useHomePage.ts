import { useEffect, useState } from 'react';
import eventsRepository from '../../repositories/events.repository';

export default function useHomePage() {
	const [events, setEvents] = useState<ILecture[]>([]);

	async function getEvents() {
		const events = await eventsRepository.list();
		setEvents(events);
	}

	useEffect(() => {
		getEvents();
	}, []);

	return {
		events,
	};
}
