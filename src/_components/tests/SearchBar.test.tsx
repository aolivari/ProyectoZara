import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchBar } from '../SearchBar';

// filepath: c:\Users\Bluumi\propio\ProyectoZara\src\_components\SearchBar.test.tsx

describe('SearchBar Component', () => {
  const mockOnSearch = jest.fn();
  const mockClearSearch = jest.fn();

  const defaultProps = {
    onSearch: mockOnSearch,
    resultsCount: '5',
    value: '',
    clearSearch: mockClearSearch,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the SearchBar component correctly', () => {
    render(<SearchBar {...defaultProps} />);
    expect(
      screen.getByPlaceholderText('Search for a smartphone...')
    ).toBeInTheDocument();
    expect(screen.getByText('5 results')).toBeInTheDocument();
  });

  it('calls onSearch when the input value changes', () => {
    render(<SearchBar {...defaultProps} />);
    const input = screen.getByPlaceholderText('Search for a smartphone...');
    fireEvent.change(input, { target: { value: 'iPhone' } });
    expect(mockOnSearch).toHaveBeenCalledWith('iPhone');
  });

  it('calls clearSearch when the clear button is clicked', () => {
    render(<SearchBar {...defaultProps} value="iPhone" />);
    const clearButton = screen.getByText('X');
    fireEvent.click(clearButton);
    expect(mockClearSearch).toHaveBeenCalled();
  });

  it('does not show the clear button when the input value is empty', () => {
    render(<SearchBar {...defaultProps} />);
    expect(screen.queryByText('X')).not.toBeInTheDocument();
  });

  it('displays the correct results count', () => {
    render(<SearchBar {...defaultProps} resultsCount="10" />);
    expect(screen.getByText('10 results')).toBeInTheDocument();
  });
});
