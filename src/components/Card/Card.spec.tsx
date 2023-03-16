import { render, screen } from '@testing-library/react';
import Card, { ICardProps } from './Card';

describe('<Card/>', () => {
	it('should render with the correct props and the correct classes', () => {
		const props: ICardProps = {
			id: 1,
			title: 'Event',
			theme: 'DevOps',
			vocal: 'Vocal',
			fromTime: '8',
			toTime: '10',
			room: 2,
			top: 0,
			height: 200,
			color: 'purple',
		};

		render(<Card {...props} />);

		expect(screen.getByText(props.title)).toBeInTheDocument();
		expect(screen.getByText(props.vocal)).toBeInTheDocument();
		expect(screen.getByText(props.theme)).toBeInTheDocument();
		expect(screen.getByTestId('card-event-room')).toHaveClass('Card');
		expect(screen.getByTestId('card-event-title')).toHaveClass('Card__title');
		expect(screen.getByTestId('card-event-info')).toHaveClass('Card__info');
		expect(screen.getByTestId('card-event-room')).toHaveStyle(`top: ${props.top}px; height: ${props.height}px;`);
		expect(screen.getByTestId('card-event-room')).toHaveClass(`Card--${props.color}`);
		expect(screen.getByTestId('card-event-tag')).toHaveClass(`Card__tag--${props.color}`);
	});

	it('should render with an empty name if not passed', () => {
		const props: ICardProps = {
			id: 1,
			title: 'Event',
			theme: 'Backend',
			vocal: '',
			fromTime: '8',
			toTime: '10',
			room: 2,
			top: 0,
			height: 200,
			color: 'blue',
		};

		render(<Card {...props} />);

		expect(screen.getByTestId('card-event-vocal')).toBeEmptyDOMElement();
	});
});
