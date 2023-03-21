import eventsClient from '../apiClient/eventsClient';
import IEvent from '../types/IEvent';

function list(): Promise<IEvent[]> {
	return eventsClient.listEvents();
}

export default {
	list,
};
