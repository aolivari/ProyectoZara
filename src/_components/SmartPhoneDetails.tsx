import React, { use, useEffect, useState, useRef } from 'react';
import { NavBar } from './NavBar'; // Adjust the path if necessary
import router from 'next/router';
import { SmartPhoneDetailsResponse, StorageOptions } from '../domain/projec';
import { ImageFadeInOut } from './ImageFadeInOut';
import { SmartPhoneInfo } from './SmartPhoneInfo';
import { AddCarButton } from './AddCarButton';
import { SmartPhoneSpecs } from './SmartPhoneSpecs';
import { BackButton } from './BackButton';
import { SimilarItems } from './SimilarItems';

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

  console.log(data);

  return (
    <div>
      <NavBar />
      <BackButton />
      <div
        style={{
          paddingTop: 110,
          paddingLeft: 48,
          paddingRight: 48,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              maxWidth: 500,
            }}
          >
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
