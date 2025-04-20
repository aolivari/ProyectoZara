import React, { useEffect, useState } from 'react';
import styles from '../CSS.modules/ImageFadeInOut.module.css';
import { set } from 'lodash';

interface ImageFadeInOutProps {
  src: string;
}

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
