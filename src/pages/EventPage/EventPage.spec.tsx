import { screen } from '@testing-library/react';
import testRender from '../../utils/testRender';
import EventPage from './Event.page';

describe('<EventPage />', () => {
	beforeEach(() => {
		testRender(EventPage, {
			route: '/event',
		});
	});

	it('should render the page title', () => {
		const pageTitle = screen.getByText(/Event/);
		expect(pageTitle).toBeVisible();
	});

	it('should render the lectures title', () => {
		const lecturesTitle = screen.getByText(/Lectures for today/);
		expect(lecturesTitle).toBeVisible();
	});

	it('should render the back link', () => {
		const backLink = screen.getByText(/🔙/);
		expect(backLink).toBeVisible();
	});

	it('should render filters component', async () => {
		const filterComponent = await screen.getByTestId('filters');
		expect(filterComponent).toBeInTheDocument();
	});

	it('should render list component', async () => {
		const listComponent = await screen.getByTestId('lectures-list');
		expect(listComponent).toBeInTheDocument();
	});
});
