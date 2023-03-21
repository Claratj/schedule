import { screen } from '@testing-library/react';
import testRender from '../../utils/testRender';
import HomePage from './Home.page';

describe('<HomePage/>', () => {
	it('should display the title', () => {
		testRender(HomePage, {
			route: '/',
			path: '/*',
		});

		expect(screen.getByText('Your events for today')).toBeVisible();
	});
});
