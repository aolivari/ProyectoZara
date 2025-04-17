import React, { useEffect, useState } from 'react';
import styles from './SmarPhoneCard.module.css';
import Image from 'next/image';

interface SmartPhoneCardProps {
  brand: string;
  name: string;
  price: string;
  imageSrc: string;
}

/**
 * Un componente funcional de React que muestra una tarjeta de smartphone con su marca, imagen, nombre y precio.
 * El componente incluye un estado de carga para manejar el proceso de carga de la imagen.
 *
 * @componente
 * @param {SmartPhoneCardProps} props - Las propiedades para el componente SmartPhoneCard.
 * @param {string} props.brand - La marca del smartphone.
 * @param {string} props.imageSrc - La URL de la imagen del smartphone.
 * @param {string} props.name - El nombre o modelo del smartphone.
 * @param {string | number} props.price - El precio del smartphone.
 *
 * @returns {JSX.Element} Un elemento JSX que representa la tarjeta del smartphone.
 *
 * @ejemplo
 * <SmartPhoneCard
 *   brand="Apple"
 *   imageSrc="/images/iphone.jpg"
 *   name="iPhone 14 Pro"
 *   price="$999"
 * />
 */
export const SmartPhoneCard = ({
  brand,
  imageSrc,
  name,
  price,
}: SmartPhoneCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
            priority={true} // Carga la imagen de inmediato
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
