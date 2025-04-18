import React from 'react';
import {
  SmartPhoneDetailsResponse,
  ColorOptions,
  StorageOptions,
} from '../domain/projec';

interface AddCarButtonProps {
  data: SmartPhoneDetailsResponse;
  colorOptions: ColorOptions;
  storageOptions: StorageOptions;
}

export const AddCarButton = ({
  data,
  colorOptions,
  storageOptions,
}: AddCarButtonProps) => {
  return <button>añadir</button>;
};
