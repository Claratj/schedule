import eventsClient, { IFilterParams } from '../apiClient/eventsClient';
import IEvent from '../types/IEvent';

function list(params: IFilterParams): Promise<IEvent[]> {
	return eventsClient.listEvents(params);
}

export default {
	list,
};
