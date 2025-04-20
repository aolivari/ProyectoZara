import React from 'react';
import { ColorOptions } from '../domain/projec';
import styles from '../CSS.modules/SmartPhoneInfo.module.css';

interface SmartPhoneInfoProps {
  selectedStorage: number | undefined;
  name: string;
  price: string;
  storages: string[];
  colorOptions: ColorOptions[];
  handleColorOptions: (index: number) => void;
  handleStorageOptions: (index: number) => void;
}

/**
 * A React functional component that displays information about a smartphone,
 * including its price, name, available storage options, and color options.
 * It allows users to select a storage option and a color option through
 * interactive UI elements.
 *
 * @param {SmartPhoneInfoProps} props - The properties passed to the component.
 * @param {number} props.price - The price of the smartphone.
 * @param {string} props.name - The name of the smartphone.
 * @param {string[]} props.storages - An array of available storage options for the smartphone.
 * @param {Array<{ name: string; hexCode: string }>} props.colorOptions - An array of color options,
 * each containing a name and a hexadecimal color code.
 * @param {function} props.handleColorOptions - A callback function to handle the selection of a color option.
 * @param {function} props.handleStorageOptions - A callback function to handle the selection of a storage option.
 * @param {number} props.selectedStorage - The index of the currently selected storage option.
 *
 * @returns {JSX.Element} The rendered component displaying smartphone information and interactive options.
 */
export const SmartPhoneInfo = ({
  price,
  name,
  storages,
  colorOptions,
  handleColorOptions,
  handleStorageOptions,
  selectedStorage,
}: SmartPhoneInfoProps) => {
  return (
    <div className={styles.smartPhoneInfo}>
      <div>
        <h1>{name}</h1>
        <h2>{price}</h2>
      </div>

      <div id="storage" className={styles.parragraph}>
        <h3>STORAGE ¿HOW MUCH YOU NEED?</h3>
        <div className={styles.storage}>
          {storages.map((storage, i) => (
            <div
              key={i + storage}
              className={
                i === selectedStorage ? styles.selected : styles.storageOption
              }
              onClick={() => handleStorageOptions(i)}
            >
              <p key={i + storage + 'p'}>{storage}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="choose_color" className={styles.parragraph}>
        <h3>CHOOSE YOUR COLOR</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
          }}
        >
          {colorOptions.map((color, i) => (
            <div
              key={i + color.name}
              style={{
                backgroundColor: color.hexCode,
                width: 20,
                height: 20,
                cursor: 'pointer',
                boxShadow: 'inset 0 0 0 1px white',
                border: '1px rgba(204, 204,204 ,1) solid',
              }}
              onClick={() => handleColorOptions(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
