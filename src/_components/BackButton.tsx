/**
 * BackButton component renders a button that navigates the user back to the home page.
 *
 * This component uses Next.js router to handle navigation and applies styles from a CSS module.
 * It displays an arrow icon and a "back" label.
 *
 * @component
 * @returns {JSX.Element} A styled back button with an arrow icon and text.
 *
 * @example
 * // Usage in a React component
 * import { BackButton } from './BackButton';
 *
 * const App = () => (
 *   <div>
 *     <BackButton />
 *   </div>
 * );
 *
 * @remarks
 * - The `onClick` handler navigates to the root path (`/`).
 * - The arrow icon is loaded from `/images/arrow_back.png`.
 * - The component uses styles from `BackButton.module.css`.
 */
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
