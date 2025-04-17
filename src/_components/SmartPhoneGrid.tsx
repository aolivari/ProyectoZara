/**
 * Un componente de React que renderiza una cuadrícula de tarjetas de smartphones.
 *
 * @componente
 * @param {SmartPhoneGridProps} props - Las propiedades para el componente SmartPhoneGrid.
 * @param {SmartPhoneDetails[]} props.smartPhones - Un array con los detalles de los smartphones a mostrar en la cuadrícula.
 * @returns {JSX.Element} Un contenedor de cuadrícula con una lista de componentes `SmartPhoneCard`.
 *
 * @ejemplo
 * ```tsx
 * import { SmartPhoneGrid } from './SmartPhoneGrid';
 * import { SmartPhoneDetails } from '../domain/projec';
 *
 * const smartPhones: SmartPhoneDetails[] = [
 *   { id: 1, brand: 'Samsung', name: 'Galaxy S21', price: 799, imageSrc: '/images/s21.png' },
 *   { id: 2, brand: 'Apple', name: 'iPhone 13', price: 999, imageSrc: '/images/iphone13.png' },
 * ];
 *
 * <SmartPhoneGrid smartPhones={smartPhones} />;
 * ```
 */
import React from 'react';
import { SmartPhoneCard } from './SmartPhoneCard';
import { SmartPhoneDetails } from '../domain/projec';
import styles from './SmartPhoneGrid.module.css';

interface SmartPhoneGridProps {
  smartPhones: SmartPhoneDetails[];
}

export const SmartPhoneGrid = ({ smartPhones }: SmartPhoneGridProps) => {
  return (
    <div role="grid" className={styles.gridContainer}>
      {smartPhones.map((smartphone, index) => (
        <SmartPhoneCard
          key={index}
          brand="Samnsung"
          imageSrc="/images/Image.png"
          name="blue"
          price="1450"
        />
      ))}
    </div>
  );
};
