import React from 'react';
import styles from '../CSS.modules/Button.module.css';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ onClick, text, variant, disabled }: ButtonProps) => {
  const clasButton = () => {
    switch (true) {
      case disabled:
        return styles.buttonDisabled;
      case variant === 'primary':
        return styles.buttonPrimary;
      case variant === 'secondary':
        return styles.buttonSecondary;
      default:
        return styles.buttonPrimary;
    }
  };

  return (
    <button
      onClick={() => onClick()}
      disabled={disabled}
      className={clasButton()}
    >
      <p className={styles.buttonText}>{text}</p>
    </button>
  );
};
