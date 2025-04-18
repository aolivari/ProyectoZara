import React from 'react';
import router from 'next/router';
import { useBag } from '../context/BagContext';
import styles from '../CSS.modules/NavBar.module.css';

interface NavBarProps {
  showCar?: boolean;
}
export const NavBar = ({ showCar = true }: NavBarProps) => {
  const { items } = useBag();

  return (
    <div className={styles.navBar}>
      <img
        src={'/images/home_button.png'}
        className={styles.homeButton}
        width={74}
        height={29}
        alt={'home'}
        onClick={() => {
          router.push(`/`);
        }}
      />
      {showCar && (
        <div className={styles.bagContainer}>
          <img
            src={'/images/bag_icon.png'}
            className={styles.bagIcon}
            width={18}
            height={18}
            alt={'bag'}
            onClick={() => {
              items.length === 0
                ? alert('Your bag is empty!')
                : router.push(`/cart`);
            }}
          />
          <p className={styles.bagCount}>{items.length}</p>
        </div>
      )}
    </div>
  );
};
