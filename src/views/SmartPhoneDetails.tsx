import React, { use, useEffect, useState, useRef } from 'react';
import { SmartPhoneDetailsResponse, StorageOptions } from '../domain/projec';
import styles from '../CSS.modules/SmartPhoneDetails.module.css';
import { BackButton } from '../_components/BackButton';
import { ImageFadeInOut } from '../_components/ImageFadeInOut';
import { SmartPhoneInfo } from '../_components/SmartPhoneInfo';
import { AddCarButton } from '../_components/AddCarButton';
import { SmartPhoneSpecs } from '../_components/SmartPhoneSpecs';
import { SimilarItems } from '../_components/SimilarItems';
import { NavBar } from '../_components/NavBar';

interface SmartPhoneDetailsProps {
  data: SmartPhoneDetailsResponse;
}

/**
 * Component that displays detailed information about a smartphone, including
 * its images, specifications, storage options, and color options. It also
 * provides functionality to select storage and color options, and add the
 * smartphone to the cart.
 *
 * @param {SmartPhoneDetailsProps} props - The props for the component.
 * @param {Object} props.data - The data object containing smartphone details.
 * @param {string} props.data.name - The name of the smartphone.
 * @param {string} props.data.brand - The brand of the smartphone.
 * @param {string} props.data.description - A description of the smartphone.
 * @param {Array<{ capacity: string; price: number }>} props.data.storageOptions -
 *   The available storage options for the smartphone, each with a capacity and price.
 * @param {Array<{ imageUrl: string }>} props.data.colorOptions -
 *   The available color options for the smartphone, each with an image URL.
 * @param {Array<Object>} props.data.specs - The specifications of the smartphone.
 * @param {Array<Object>} props.data.similarProducts - A list of similar products.
 *
 * @returns {JSX.Element} The rendered SmartPhoneDetails component.
 */
export const SmartPhoneDetails = ({ data }: SmartPhoneDetailsProps) => {
  const [colorOptions, setColorOptions] = useState(data.colorOptions[0]);
  const [price, setPrice] = useState<string>();
  const [selectedStorage, setSelectedStorage] = useState<StorageOptions>();
  const [paddingInfo, setPaddingInfo] = useState<number>(105);
  const smartPhoneInfoRef = useRef<HTMLDivElement>(null);

  const fromPrice = data.storageOptions.sort((a, b) => a.price - b.price)[0]
    .price;
  const storages = data.storageOptions.map((storage) => storage.capacity);

  useEffect(() => {
    setColorOptions(data.colorOptions[0]);
    setPrice(`from ${fromPrice} EUR`);
  }, [data]);

  useEffect(() => {
    if (smartPhoneInfoRef.current) {
      const dimensions = smartPhoneInfoRef.current.getBoundingClientRect();
      setPaddingInfo(dimensions.width + 500);
    }
  }, []);

  const handleColorOptions = (index: number) => {
    setColorOptions(data.colorOptions[index]);
  };

  const handleStorageOptions = (index: number) => {
    setPrice(`${data.storageOptions[index].price.toString()} EUR`);
    setSelectedStorage(data.storageOptions[index]);
  };

  return (
    <div>
      <NavBar />
      <BackButton />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageContainer}>
            <ImageFadeInOut src={colorOptions.imageUrl} />
          </div>
          <div ref={smartPhoneInfoRef}>
            <SmartPhoneInfo
              selectedStorage={storages.findIndex(
                (storage) => storage === selectedStorage?.capacity
              )}
              handleStorageOptions={(i) => handleStorageOptions(i)}
              colorOptions={data.colorOptions}
              price={price as string}
              handleColorOptions={handleColorOptions}
              name={data.name}
              storages={storages}
            />
            <AddCarButton
              data={data}
              colorOptions={colorOptions}
              storageOptions={selectedStorage as StorageOptions}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: 24,
            width: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              paddingLeft: `calc((100vw - ${paddingInfo}px) / 3.2)`,
              paddingRight: `calc((100vw - ${paddingInfo}px) / 3.2)`,
              paddingTop: 154,
            }}
          >
            <SmartPhoneSpecs
              brand={data.brand}
              description={data.description}
              name={data.name}
              specs={data.specs}
            />
            <SimilarItems smartPhones={data.similarProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};
