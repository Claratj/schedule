import { IFilter } from '../components/Filters/Filters';
import lectures from '../mock/apiLecturesResponse';
import ILecture from '../types/ILecture';

export interface IFilterParams extends IFilter {}

async function listLectures(filterParams: IFilterParams): Promise<ILecture[]> {
	const response = await Promise.resolve(lectures);
	// Actually, here the parameters would be sent to the back to be filtered from there and returned to us filtered to improve performance.
	if (filterParams) {
		return response.filter(
			(lecture: ILecture) =>
				(filterParams.vocal ? lecture.vocal === filterParams.vocal : true) &&
				(filterParams.theme ? lecture.theme === filterParams.theme : true)
		);
	}
	return response;
}

export default {
	listLectures,
};
