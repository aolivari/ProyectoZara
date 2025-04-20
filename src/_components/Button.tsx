import React from 'react';
import styles from '../CSS.modules/Button.module.css';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
}

/**
 * A reusable Button component that renders a styled button element.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @param {() => void} props.onClick - The callback function to execute when the button is clicked.
 * @param {string} props.text - The text to display inside the button.
 * @param {'primary' | 'secondary'} [props.variant] - The visual style variant of the button. Defaults to 'primary'.
 * @param {boolean} [props.disabled] - Whether the button is disabled. Defaults to `false`.
 *
 * @returns {JSX.Element} A styled button element.
 */
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
