import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import router from 'next/router';
import '@testing-library/jest-dom';
import { BackButton } from '../BackButton';

// filepath: src/_components/BackButton.test.tsx

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

describe('BackButton', () => {
  it('renders the back button with an image and text', () => {
    render(<BackButton />);

    const image = screen.getByAltText('back arrow');
    const text = screen.getByText(/back/i);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/arrow_back.png');
    expect(text).toBeInTheDocument();
  });

  it('navigates to the home page when clicked', () => {
    render(<BackButton />);

    const button = screen.getByText(/back/i).closest('div');
    fireEvent.click(button!);

    expect(router.push).toHaveBeenCalledWith('/');
  });
});
