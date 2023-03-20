import { screen } from '@testing-library/react';
import App from './App';
import testRender from './utils/testRender';

describe('<App/>', () => {
	it('should display the title', () => {
		testRender(App, {
			route: '/',
			path: '/*',
		});

		expect(screen.getByText('Your events for today')).toBeVisible();
	});
});
