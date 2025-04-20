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
            marginTop: 24, // Espaciado entre las filas
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
