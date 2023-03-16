import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
	it('should display the title', () => {
		render(<App />);

		expect(screen.getByText('Your meetings for today')).toBeVisible();
	});

	it('should render Filters and List components correctly', () => {
		const { container } = render(<App />);
		expect(container.querySelectorAll('[data-testid="filters"]').length).toBe(1);
		expect(container.querySelectorAll('[data-testid="events-list"]').length).toBe(1);
		expect(screen.getByText(/Your meetings for today/)).toBeVisible();
	});
});
