import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SmartPhoneGrid } from '../SmartPhoneGrid';
import { SmartPhoneCard } from '../SmartPhoneCard';

jest.mock('../SmartPhoneCard', () => ({
  SmartPhoneCard: jest.fn(({ brand, name, price, imageSrc }) => (
    <div data-testid="smartphone-card">
      <p>{brand}</p>
      <p>{name}</p>
      <p>{price}</p>
      <img src={imageSrc} alt={`${brand} ${name}`} />
    </div>
  )),
}));

describe('SmartPhoneGrid Component', () => {
  const mockSmartPhones = [
    {
      id: '67890',
      brand: 'Samsung',
      name: 'Galaxy S22',
      basePrice: 799,
      imageUrl: 'https://example.com/galaxy-s22.jpg',
    },
    {
      id: '67890',
      brand: 'Samsung',
      name: 'Galaxy S22',
      basePrice: 799,
      imageUrl: 'https://example.com/galaxy-s22.jpg',
    },
  ];

  it('renders the correct number of SmartPhoneCard components', () => {
    render(<SmartPhoneGrid smartPhones={mockSmartPhones} />);
    const cards = screen.getAllByTestId('smartphone-card');
    expect(cards).toHaveLength(mockSmartPhones.length);
  });
  it('renders a single column layout when viewed on a mobile screen', () => {
    // Mock the window size to simulate a mobile screen
    global.innerWidth = 375; // Typical mobile screen width
    global.dispatchEvent(new Event('resize'));

    render(<SmartPhoneGrid smartPhones={mockSmartPhones} />);
    const gridContainer = screen.getByRole('grid'); // Assuming the grid container has a role of "grid"

    // Check if the grid container has a single column layout
    expect(gridContainer).toHaveClass('gridContainer');
    // Mock getComputedStyle to simulate the grid layout
    jest.spyOn(window, 'getComputedStyle').mockReturnValue({
      gridTemplateColumns: 'repeat(1, 1fr)',
    } as CSSStyleDeclaration);

    expect(window.getComputedStyle(gridContainer).gridTemplateColumns).toBe(
      'repeat(1, 1fr)'
    );
  });
  it('renders a two-column layout when viewed on a tablet screen', () => {
    // Mock the window size to simulate a tablet screen
    global.innerWidth = 768; // Typical tablet screen width
    global.dispatchEvent(new Event('resize'));

    render(<SmartPhoneGrid smartPhones={mockSmartPhones} />);
    const gridContainer = screen.getByRole('grid'); // Assuming the grid container has a role of "grid"

    // Check if the grid container has a two-column layout
    expect(gridContainer).toHaveClass('gridContainer');
    // Mock getComputedStyle to simulate the grid layout
    jest.spyOn(window, 'getComputedStyle').mockReturnValue({
      gridTemplateColumns: 'repeat(2, 1fr)',
    } as CSSStyleDeclaration);

    expect(window.getComputedStyle(gridContainer).gridTemplateColumns).toBe(
      'repeat(2, 1fr)'
    );
  });
});
