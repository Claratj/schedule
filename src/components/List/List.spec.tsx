import { render, screen } from '@testing-library/react';
import List, { IListProps } from './List';
import useList from './useList';

const { roomOne, roomTwo, calculateDistanceFromTop, calculateDivHeight, getCardColor } = useList();

describe('<List/>', () => {
	it('calculateDistanceFromTop should return the correct value given a start time', () => {
		const startTime = '8';
		const result = calculateDistanceFromTop(startTime);
		expect(result).toEqual(0);
	});

	it('getCardColor should return the correct color given a theme', () => {
		const theme = 'General';
		const result = getCardColor(theme);
		expect(result).toEqual('yellow');
	});

	it('should render the List component correctly', () => {
		const props: IListProps = {
			events: [
				{
					id: 1,
					title: 'Event 1',
					theme: 'DevOps',
					vocal: 'Vocal',
					fromTime: '8',
					toTime: '10',
					room: 1,
				},
				{
					id: 2,
					title: 'Event 2',
					theme: 'Frontend',
					vocal: 'Vocal',
					fromTime: '11',
					toTime: '13',
					room: 2,
				},
			],
			rooms: [1, 2],
		};

		const { getByTestId } = render(<List {...props} />);

		const list = getByTestId('events-list');
		const listHeaders = getByTestId('events-list-headers');
		const listBody = getByTestId('events-list-body');

		expect(list).toBeInTheDocument();
		expect(listHeaders).toBeInTheDocument();
		expect(listBody).toBeInTheDocument();
		expect(screen.getByText(/Room 1/)).toBeVisible();
		expect(screen.getByText(/Room 2/)).toBeVisible();
		expect(screen.getByText('8')).toBeVisible();
	});
});
