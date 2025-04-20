import React from 'react';
import styles from '../CSS.modules/SmarPhoneCard.module.css';
import { useRouter } from 'next/router';

interface SmartPhoneCardProps {
  brand: string;
  name: string;
  price: string;
  imageSrc: string;
  id: string;
  imageHeight?: number;
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
 * @param {string} props.id - El id del smartphone.
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
  id,
  brand,
  imageSrc,
  name,
  price,
  imageHeight = 300,
}: SmartPhoneCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    //codificar name para evitar problemas con caracteres especiales en la URL,
    const encodedName = encodeURIComponent(id);
    router.push(`/details/${encodedName}`);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={imageSrc}
            height={imageHeight}
            alt={`${brand} ${name}`}
            className={styles.image}
            onClick={handleClick}
            {...{ fetchpriority: 'high' }}
          />
        </div>
        <div className={styles.info}>
          <h1>{brand}</h1>
          <div className={styles.description}>
            <h2>{name}</h2>
            <h2>{price} EUR</h2>
          </div>
        </div>
      </div>
    </>
  );
};
