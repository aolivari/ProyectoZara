import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button';

// filepath: c:\Users\Bluumi\propio\ProyectoZara\src\_components\Button.test.tsx

describe('Button Component', () => {
  const mockOnClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the button with the correct text', () => {
    render(<Button text="Click Me" variant="primary" onClick={mockOnClick} />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('applies the correct class for the primary variant', () => {
    render(<Button text="Primary" variant="primary" onClick={mockOnClick} />);
    const button = screen.getByRole('button', { name: /primary/i });
    expect(button).toHaveClass('buttonPrimary');
  });

  it('applies the correct class for the secondary variant', () => {
    render(
      <Button text="Secondary" variant="secondary" onClick={mockOnClick} />
    );
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toHaveClass('buttonSecondary');
  });

  it('applies the disabled class and disables the button when the disabled prop is true', () => {
    render(
      <Button
        text="Disabled"
        variant="primary"
        onClick={mockOnClick}
        disabled={true}
      />
    );
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('buttonDisabled');
  });

  it('calls the onClick function when clicked', () => {
    render(<Button text="Click Me" variant="primary" onClick={mockOnClick} />);
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('does not call the onClick function when disabled', () => {
    render(
      <Button
        text="Disabled"
        variant="primary"
        onClick={mockOnClick}
        disabled={true}
      />
    );
    const button = screen.getByRole('button', { name: /disabled/i });
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
