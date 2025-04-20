import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AddCarButton } from '../AddCarButton';
import { SmartPhoneDetailsResponse } from '../../domain/projec';
import { BagContext } from '../../context/BagContext';
import '@testing-library/jest-dom';

const mockAddItem = jest.fn();

const mockBagContext = {
  addItem: mockAddItem,
  removeItem: jest.fn(),
  clearBag: jest.fn(),
  items: [],
};

const mockData: SmartPhoneDetailsResponse = {
  id: '12345',
  brand: 'Apple',
  name: 'iPhone 14',
  description: 'The latest iPhone model',
  basePrice: 999,
  rating: 4.5,
  specs: {
    screen: '6.1-inch',
    resolution: '2532x1170',
    processor: 'A15 Bionic',
    mainCamera: '12MP',
    selfieCamera: '12MP',
    battery: '3115mAh',
    os: 'iOS 16',
    screenRefreshRate: '120Hz',
  },
  colorOptions: [
    {
      name: 'Red',
      hexCode: '#FF0000',
      imageUrl: 'https://example.com/red-iphone.jpg',
    },
  ],
  storageOptions: [{ capacity: '128GB', price: 125 }],
  similarProducts: [
    {
      id: '67890',
      brand: 'Samsung',
      name: 'Galaxy S22',
      basePrice: 799,
      imageUrl: 'https://example.com/galaxy-s22.jpg',
    },
  ],
};

const mockColorOptions = {
  name: 'Red',
  hexCode: '#FF0000',
  imageUrl: 'https://example.com/red-iphone.jpg',
};

const mockStorageOptions = { capacity: '128GB', price: 125 };

describe('AddCarButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the button and disables it when colorOptions or storageOptions are missing', () => {
    render(
      <BagContext.Provider value={mockBagContext}>
        <AddCarButton
          data={mockData}
          colorOptions={mockColorOptions}
          storageOptions={undefined}
        />
      </BagContext.Provider>
    );

    const button = screen.getByRole('button', { name: /añadir/i });
    expect(button).toBeDisabled();
  });

  it('enables the button when both colorOptions and storageOptions are provided', () => {
    render(
      <BagContext.Provider value={mockBagContext}>
        <AddCarButton
          data={mockData}
          colorOptions={mockColorOptions}
          storageOptions={{ capacity: '128GB', price: 125 }}
        />
      </BagContext.Provider>
    );

    const button = screen.getByRole('button', { name: /añadir/i });
    expect(button).toBeEnabled();
  });

  it('calls addItem with the correct data when the button is clicked', () => {
    render(
      <BagContext.Provider value={mockBagContext}>
        <AddCarButton
          data={mockData}
          colorOptions={mockColorOptions}
          storageOptions={mockStorageOptions}
        />
      </BagContext.Provider>
    );

    const button = screen.getByRole('button', { name: /añadir/i });
    fireEvent.click(button);

    expect(mockAddItem).toHaveBeenCalledTimes(1);
    expect(mockAddItem).toHaveBeenCalledWith({
      model: 'iPhone 14',
      brand: 'Apple',
      price: 999,
      imageSrc: 'https://example.com/red-iphone.jpg',
      color: 'Red',
      id: '12345',
      storage: '128GB',
    });
  });
});
