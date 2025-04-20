import { render, screen, fireEvent } from '@testing-library/react';
import { NavBar } from '../NavBar';
import router from 'next/router';
import { useBag } from '../../context/BagContext';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

jest.mock('../../context/BagContext', () => ({
  useBag: jest.fn(),
}));

const mockUseBag = useBag as jest.Mock;

describe('NavBar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the bag icon only when showCar is true', () => {
    mockUseBag.mockReturnValue({
      items: [
        {
          model: 'Sample Model',
          brand: 'Sample Brand',
          price: 100,
          imageSrc: 'sample-image.jpg',
          color: 'red',
          id: 'sample-id',
          storage: '64GB',
        },
      ],
    });

    const { rerender } = render(<NavBar showCar={true} />);
    expect(screen.getByAltText('bag')).toBeInTheDocument();

    rerender(<NavBar showCar={false} />);
    expect(screen.queryByAltText('bag')).not.toBeInTheDocument();
  });

  it('navigates to the cart when the bag has items and the bag icon is clicked', () => {
    mockUseBag.mockReturnValue({ items: [1, 2] });

    render(<NavBar />);
    const bagIcon = screen.getByAltText('bag');
    fireEvent.click(bagIcon);

    expect(router.push).toHaveBeenCalledWith('/cart');
  });
  it('displays the correct number of items in the bag', () => {
    mockUseBag.mockReturnValue({ items: [1, 2, 3] });

    render(<NavBar />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('navigates to the home page when the home button is clicked', () => {
    mockUseBag.mockReturnValue({ items: [] });

    render(<NavBar />);
    const homeButton = screen.getByAltText('home');
    fireEvent.click(homeButton);

    expect(router.push).toHaveBeenCalledWith('/');
  });
});
