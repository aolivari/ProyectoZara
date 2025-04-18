import React, { useRef } from 'react';
import { SmartPhoneData } from '../domain/projec';
import { SmartPhoneCard } from './SmartPhoneCard';
import styles from '../CSS.modules/SimilarItems.module.css';

interface SimilarItemsProps {
  smartPhones: SmartPhoneData[];
}

export const SimilarItems = ({ smartPhones }: SimilarItemsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    isDragging = true;
    startX = event.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Velocidad del desplazamiento
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    isDragging = false;
  };

  return (
    <div>
      <div className={styles.header}>Similar Items</div>
      <div
        ref={containerRef}
        className={styles.container}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {smartPhones.map((smartphone, index) => (
          <div key={index} className={styles.cards}>
            <SmartPhoneCard
              imageHeight={344}
              brand={smartphone.brand}
              id={smartphone.id}
              imageSrc={smartphone.imageUrl}
              name={smartphone.name}
              price={smartphone.basePrice.toString()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
