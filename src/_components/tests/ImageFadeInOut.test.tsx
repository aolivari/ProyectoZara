import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { ImageFadeInOut } from '../ImageFadeInOut';

// filepath: src/_components/ImageFadeInOut.test.tsx

describe('ImageFadeInOut Component', () => {
  const sampleSrc = 'https://example.com/sample-image.jpg';

  it('renders a container with the correct styles', () => {
    const { container } = render(<ImageFadeInOut src={sampleSrc} />);
    const div = container.querySelector('div');

    expect(div).toHaveStyle({
      position: 'relative',
      width: '500px',
      height: '500px',
    });
  });
});
