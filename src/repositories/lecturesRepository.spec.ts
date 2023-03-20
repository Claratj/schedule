import lecturesRepository from './lectures.repository';

describe('lectures.repository', () => {
	it('should return the correct data with the appropriate filters applied', async () => {
		const filterParams = { theme: 'General' };
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

		const result = await lecturesRepository.list(filterParams);

		expect(result).toEqual(expectedResult);
	});

	it('should not return the correct data with the wrong filters applied', async () => {
		const filterParams = { theme: 'Festival' };
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

		const result = await lecturesRepository.list(filterParams);

		expect(result).not.toEqual(expectedResult);
		expect(result).toStrictEqual([]);
	});
});
