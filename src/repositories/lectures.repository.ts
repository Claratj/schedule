import lecturesClient, { IFilterParams } from '../apiClient/lecturesClient';
import ILecture from '../types/ILecture';

function list(params: IFilterParams): Promise<ILecture[]> {
	return lecturesClient.listLectures(params);
}

export default {
	list,
};
