import router from 'next/router';
import React from 'react';
import styles from '../CSS.modules/BackButton.module.css';

export const BackButton = () => {
  return (
    <div className={styles.backButton} onClick={() => router.push(`/`)}>
      <img
        width={5.06}
        height={8.71}
        fetchPriority="high"
        src={'/images/arrow_back.png'}
        alt="back arrow"
      />
      <p>back</p>
    </div>
  );
};
