import React, { useEffect, useState } from 'react';
import styles from './SmarPhoneCard.module.css';
import Image from 'next/image';

interface SmartPhoneCardProps {
  brand: string;
  name: string;
  price: string;
  imageSrc: string;
}

export const SmartPhoneCard = ({
  brand,
  imageSrc,
  name,
  price,
}: SmartPhoneCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    console.log(isImageLoaded);
  }, [isImageLoaded]);

  return (
    <>
      {!isImageLoaded && (
        <div className={styles.loader}>
          <Image
            style={{ display: 'none' }}
            src={imageSrc}
            alt={`${brand} ${name}`}
            className={styles.image}
            width={312}
            height={257}
            priority
            onLoadingComplete={() => setIsImageLoaded(true)} // Detecta cuando la imagen está cargada
          />
        </div>
      )}
      {isImageLoaded && (
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src={imageSrc}
              alt={`${brand} ${name}`}
              className={styles.image}
              width={312}
              height={257}
              priority
            />
          </div>

          <div className={styles.info}>
            <h1>{brand}</h1>
            <div className={styles.description}>
              <h2>{name}</h2>
              <h2>{price}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
