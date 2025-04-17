/**
 * Unit tests for the `SmartPhoneCard` component.
 *
 * These tests ensure the correct rendering and behavior of the `SmartPhoneCard` component,
 * including its interaction with the mocked `next/image` component.
 *
 * Mocked `next/image`:
 * - The `next/image` component is mocked to simulate the behavior of an image element,
 *   excluding the `onLoadingComplete` and `priority` properties.
 * - The mock triggers the `onLoadingComplete` callback when the `onLoad` event is fired.
 *
 * Test Cases:
 * 1. **Image Load Simulation**:
 *    - Simulates the image load event to test the behavior of the component when the image is loaded.
 *
 * 2. **Image Rendering**:
 *    - Verifies that the image is rendered with the correct `alt` text and `src` attribute.
 *
 * 3. **Content Rendering After Image Load**:
 *    - Ensures that the brand, name, and price are rendered only after the image has been loaded.
 *
 * 4. **Content Absence Before Image Load**:
 *    - Confirms that the brand, name, and price are not rendered before the image is loaded.
 *
 * Mock Props:
 * - `brand`: The brand of the smartphone (e.g., "Apple").
 * - `name`: The name of the smartphone (e.g., "iPhone 14 Pro").
 * - `price`: The price of the smartphone (e.g., "$999").
 * - `imageSrc`: The source URL of the smartphone image (e.g., "/images/image.png").
 */
import React, { JSX } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SmartPhoneCard } from '../SmartPhoneCard';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>
  ) => {
    // Excluye la propiedad `onLoadingComplete` del elemento <img>
    const { onLoadingComplete, ...rest } =
      props as React.ImgHTMLAttributes<HTMLImageElement> & {
        onLoadingComplete?: (img: HTMLImageElement) => void;
      };
    return (
      <img
        {...rest}
        onLoad={() => {
          if (onLoadingComplete) {
            onLoadingComplete({} as HTMLImageElement); // Llama a onLoadingComplete
          }
        }}
      />
    );
  },
}));

describe('SmartPhoneCard Component', () => {
  const mockProps = {
    brand: 'Apple',
    name: 'iPhone 14 Pro',
    price: '$999',
    imageSrc: '/images/image.png',
  };

  it('emule the image has been loaded', () => {
    render(<SmartPhoneCard {...mockProps} />);

    // Simula que la imagen se ha cargado
    const image = screen.getByAltText(`${mockProps.brand} ${mockProps.name}`);
    image.dispatchEvent(new Event('load'));
  });

  it('renders the image with the correct alt text', () => {
    render(<SmartPhoneCard {...mockProps} />);

    // Verifica que la imagen tenga el alt correcto
    const image = screen.getByAltText(`${mockProps.brand} ${mockProps.name}`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProps.imageSrc);
  });

  it('renders the brand only after the image is loaded', async () => {
    render(<SmartPhoneCard {...mockProps} />);

    // Encuentra la imagen por su alt
    const image = screen.getByAltText(`${mockProps.brand} ${mockProps.name}`);

    // Simula el evento de carga
    image.dispatchEvent(new Event('load'));

    // Espera a que el contenido se renderice después de que la imagen se haya cargado
    await waitFor(() => {
      expect(screen.getByText(mockProps.brand)).toBeInTheDocument();
      expect(screen.getByText(mockProps.name)).toBeInTheDocument();
      expect(screen.getByText(mockProps.price)).toBeInTheDocument();
    });
  });

  it('does not render the content before the image is loaded', () => {
    render(<SmartPhoneCard {...mockProps} />);

    // Verifica que el contenido no esté presente antes de cargar la imagen
    expect(screen.queryByText(mockProps.brand)).not.toBeInTheDocument();
    expect(screen.queryByText(mockProps.name)).not.toBeInTheDocument();
    expect(screen.queryByText(mockProps.price)).not.toBeInTheDocument();
  });
});
