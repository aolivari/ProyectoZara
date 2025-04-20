import React, { useEffect, useState } from 'react';
import styles from '../CSS.modules/ImageFadeInOut.module.css';
import { set } from 'lodash';

interface ImageFadeInOutProps {
  src: string;
}

/**
 * A React component that renders two images with fade-in and fade-out effects.
 * The images are stacked on top of each other within a container of fixed dimensions.
 *
 * @component
 * @param {ImageFadeInOutProps} props - The props for the component.
 * @param {string} props.src - The source URL of the image to display.
 *
 * @returns {JSX.Element} A JSX element containing the images with fade-in and fade-out effects.
 */
export const ImageFadeInOut = ({ src }: ImageFadeInOutProps) => {
  return (
    <div style={{ position: 'relative', width: 500, height: 500 }}>
      <img
        src={src}
        key={src}
        alt=""
        className={styles.ImageFadeInOutContainer}
      />
      <img
        src={src}
        key={src}
        alt=""
        className={styles.ImageFadeInOutContainer2}
      />
    </div>
  );
};
