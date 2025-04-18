import React from 'react';
import {
  SmartPhoneDetailsResponse,
  ColorOptions,
  StorageOptions,
  SmartPhoneData,
  ShoppingBagItem,
} from '../domain/projec';

import styles from '../CSS.modules/AddCarButton.module.css';
import { useBag } from '../context/BagContext';

interface AddCarButtonProps {
  data: SmartPhoneDetailsResponse;
  colorOptions: ColorOptions;
  storageOptions: StorageOptions;
}

/**
 * A React functional component that renders a button to add a smartphone to the shopping bag.
 * The button is enabled only when both `colorOptions` and `storageOptions` are provided.
 *
 * @param {AddCarButtonProps} props - The properties for the AddCarButton component.
 * @param {object} props.data - The smartphone data to be added to the shopping bag.
 * @param {string} props.data.name - The name of the smartphone model.
 * @param {string} props.data.brand - The brand of the smartphone.
 * @param {number} props.data.basePrice - The base price of the smartphone.
 * @param {string} props.data.id - The unique identifier for the smartphone.
 * @param {object} props.colorOptions - The selected color options for the smartphone.
 * @param {string} props.colorOptions.name - The name of the selected color.
 * @param {string} props.colorOptions.imageUrl - The URL of the image for the selected color.
 * @param {object} props.storageOptions - The selected storage options for the smartphone.
 * @param {string} props.storageOptions.capacity - The capacity of the selected storage option.
 *
 * @returns {JSX.Element} A button element that allows adding the smartphone to the shopping bag.
 *
 * @remarks
 * - The button is disabled if either `colorOptions` or `storageOptions` is undefined.
 * - When clicked, the button adds the smartphone to the shopping bag using the `addItem` function from the bag context.
 */
export const AddCarButton = ({
  data,
  colorOptions,
  storageOptions,
}: AddCarButtonProps) => {
  const { addItem, items } = useBag(); // Accede al contexto de la bolsa
  const buttonEnabled: boolean =
    colorOptions !== undefined && storageOptions !== undefined;

  const handleAddToBag = () => {
    if (!buttonEnabled) return; // If the button is not enabled, do nothing
    const smartphoneToAdd: ShoppingBagItem = {
      model: data.name,
      brand: data.brand,
      price: data.basePrice,
      imageSrc: colorOptions.imageUrl,
      color: colorOptions.name,
      id: data.id,
      storage: storageOptions.capacity,
    };

    addItem(smartphoneToAdd); // Add the product to the shopping bag
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handleAddToBag}
        disabled={!buttonEnabled}
        className={buttonEnabled ? styles.buttonEnabled : styles.buttonDisabled}
      >
        <p className={styles.buttonText}>añadir</p>
      </button>
    </div>
  );
};
