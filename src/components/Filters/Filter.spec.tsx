import { fireEvent, render } from '@testing-library/react';
import Filters from './Filters';

describe('Filters', () => {
	it('should render filters correctly', () => {
		const props = {
			onFiltersChange: jest.fn(),
			vocals: ['Vocal 1', 'Vocal 2'],
		};

		const { getByTestId } = render(<Filters {...props} />);

		expect(getByTestId('vocal-select')).toBeInTheDocument();
		expect(getByTestId('theme-select')).toBeInTheDocument();
		expect(getByTestId('clear-filters-btn')).toBeInTheDocument();
	});

	it('should render with default filter values', () => {
		const props = {
			onFiltersChange: jest.fn(),
			vocals: [],
		};

		const initialFiltersState = {
			vocal: '',
			theme: '',
		};

		const { getByTestId } = render(<Filters {...props} />);

		expect(getByTestId('vocal-select')).toHaveValue(initialFiltersState.vocal);
		expect(getByTestId('theme-select')).toHaveValue(initialFiltersState.theme);
	});

	it('should call onFiltersChange with initial filters state when clearFilters is called', () => {
		const props = {
			onFiltersChange: jest.fn(),
			vocals: [],
		};

		const initialFiltersState = {
			vocal: '',
			theme: '',
		};

		const { getByTestId } = render(<Filters {...props} />);

		fireEvent.click(getByTestId('clear-filters-btn'));

		expect(props.onFiltersChange).toBeCalledWith(initialFiltersState);
	});

	it('should update filter values when vocal and theme select change', () => {
		const props = {
			onFiltersChange: jest.fn(),
			vocals: ['Vocal 1', 'Vocal 2'],
		};

		const { getByTestId } = render(<Filters {...props} />);

		fireEvent.change(getByTestId('vocal-select'), { target: { value: 'Vocal 1' } });
		fireEvent.change(getByTestId('theme-select'), { target: { value: 'Frontend' } });

		const expectedFilters = {
			vocal: 'Vocal 1',
			theme: 'Frontend',
		};

		expect(props.onFiltersChange).toBeCalledWith(expectedFilters);
	});
});
