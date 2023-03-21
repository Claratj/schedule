import events from '../mock/apiEventsResponse';
import IEvent from '../types/IEvent';

async function listEvents(): Promise<IEvent[]> {
	const response = await Promise.resolve(events);

	return response;
}

export default {
	listEvents,
};
