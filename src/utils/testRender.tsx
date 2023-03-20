import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export interface ITestRenderOptions {
	/**
	 * Simulated browser URL. Usually path with replaced values.
	 */
	route?: string;
	/**
	 * ReactRouter path.
	 */
	path?: string;
}

interface ITestRouterProps {
	Component: React.ElementType;
	path: string;
	route: string;
}

const DEFAULT_VALUE = { route: '/', path: '*' };

/**
 * Helper function to create less verbose tests.
 *
 * It provides support for history, location configuration, and a Modal singleton.
 *
 * @param Component
 * @param options - Presets to the tests
 */

export default function testRender(
	Component: React.ElementType,
	{ route = '/', path = '*' }: ITestRenderOptions = DEFAULT_VALUE
) {
	// Render the given component using the HOC
	const WrappedComponent = WithTestRouter({ Component, path, route });
	const renderResults = render(<WrappedComponent />);

	return {
		...renderResults,
		WrappedComponent,
	};
}

export function WithTestRouter({ Component, ...options }: ITestRouterProps) {
	return function TestRouter() {
		return (
			<BrowserRouter>
				<Routes>
					<Route
						path={options.path}
						element={
							<>
								<Component />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		);
	};
}
