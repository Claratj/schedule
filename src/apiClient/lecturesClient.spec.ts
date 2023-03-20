import lectures from '../mock/apiLecturesResponse';
import lecturesClient from './lecturesClient';

describe('lecturesClient', () => {
	it('should return the correct results for filters params with one vocal', () => {
		const filterParams = {
			vocal: 'David Fernández García',
		};

		const expectedResult = [
			{
				id: 1,
				title: 'Introducción',
				theme: 'General',
				vocal: 'David Fernández García',
				fromTime: '9',
				toTime: '10',
				room: 1,
			},
		];

		expect(lecturesClient.listLectures(filterParams)).resolves.toEqual(expectedResult);
	});

	it('should return the correct results for input params with one theme', () => {
		const filterParams = {
			vocal: '',
			theme: 'Frontend',
		};

		const expectedResult = [
			{
				id: 4,
				title: 'Vue VS. el resto de escoria',
				theme: 'Frontend',
				vocal: 'Iñaki Heras Torrosa',
				fromTime: '10',
				toTime: '11',
				room: 2,
			},
			{
				id: 5,
				title: 'Brujería con Typescript',
				theme: 'Frontend',
				vocal: 'Mario Fernández Tapia',
				fromTime: '11',
				toTime: '12',
				room: 2,
			},
			{
				id: 6,
				title: 'Kubernetes para Dummmies',
				theme: 'Frontend',
				vocal: 'Lucía Castro de la Torre',
				fromTime: '12',
				toTime: '13',
				room: 2,
			},
		];

		expect(lecturesClient.listLectures(filterParams)).resolves.toEqual(expectedResult);
	});

	it('should return the correct results for input params with one vocal and one theme', () => {
		const filterParams = {
			vocal: 'Miguel Ángel Pérez Muñoz',
			theme: 'Backend',
		};

		const expectedResult = [
			{
				id: 2,
				title: '¡Pásate a Micronaut!',
				theme: 'Backend',
				vocal: 'Miguel Ángel Pérez Muñoz',
				fromTime: '10',
				toTime: '11',
				room: 1,
			},
		];
		expect(lecturesClient.listLectures(filterParams)).resolves.toEqual(expectedResult);
	});

	it('should return all results if the filter params come empty', () => {
		const filterParams = {
			vocal: '',
			theme: '',
		};

		expect(lecturesClient.listLectures(filterParams)).resolves.toEqual(lectures);
	});

	it('should return an empty array when none of the data match the filter params', () => {
		const filterParams = {
			vocal: 'vocal',
			theme: 'theme',
		};

		expect(lecturesClient.listLectures(filterParams)).resolves.toEqual([]);
	});
});
