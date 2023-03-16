import { IFilter } from '../components/Filters/Filters';
import events from '../mock/apiEventsResponse';
import IEvent from '../types/IEvent';

export interface IFilterParams extends IFilter {}

async function listEvents(filterParams: IFilterParams): Promise<IEvent[]> {
	const response = await Promise.resolve(events);
	// Actually, here the parameters would be sent to the back to be filtered from there and returned to us filtered to improve performance.
	if (filterParams) {
		return response.filter(
			(event) =>
				(filterParams.vocal ? event.vocal === filterParams.vocal : true) &&
				(filterParams.theme ? event.theme === filterParams.theme : true)
		);
	}
	return response;
}

export default {
	listEvents,
};
