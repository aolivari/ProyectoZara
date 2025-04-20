import React from 'react';
import router from 'next/router';
import { useBag } from '../context/BagContext';
import styles from '../CSS.modules/NavBar.module.css';

interface NavBarProps {
  showCar?: boolean;
}
/**
 * NavBar component that displays a navigation bar with a home button and an optional shopping bag icon.
 *
 * @param {NavBarProps} props - The properties for the NavBar component.
 * @param {boolean} [props.showCar=true] - Determines whether the shopping bag icon is displayed.
 *
 * @returns {JSX.Element} The rendered NavBar component.
 *
 * @remarks
 * - The home button redirects the user to the home page (`/`) when clicked.
 * - If `showCar` is true, a shopping bag icon is displayed. Clicking the bag icon:
 *   - Alerts the user if the bag is empty.
 *   - Redirects to the cart page (`/cart`) if there are items in the bag.
 *
 * @example
 * ```tsx
 * <NavBar showCar={true} />
 * ```
 */
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
