import React, { useRef } from 'react';
import { SmartPhoneData } from '../domain/projec';
import { SmartPhoneCard } from './SmartPhoneCard';
import styles from '../CSS.modules/SimilarItems.module.css';

interface SimilarItemsProps {
  smartPhones: SmartPhoneData[];
}

/**
 * A React functional component that displays a horizontally scrollable list of similar items (smartphones).
 * The list can be scrolled by dragging with the mouse.
 *
 * @param {SimilarItemsProps} props - The props for the component.
 * @param {Array} props.smartPhones - An array of smartphone objects to be displayed in the list.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @remarks
 * - The component uses a `useRef` hook to reference the scrollable container.
 * - Mouse events (`onMouseDown`, `onMouseMove`, `onMouseUp`, and `onMouseLeave`) are used to implement drag-to-scroll functionality.
 * - The `handleMouseDown` function initializes the dragging state and stores the starting position and scroll offset.
 * - The `handleMouseMove` function calculates the scroll position based on the drag distance and updates the container's scroll position.
 * - The `handleMouseUpOrLeave` function resets the dragging state when the mouse is released or leaves the container.
 *
 * @example
 * ```tsx
 * const smartphones = [
 *   { id: 1, brand: 'Brand A', name: 'Model X', imageUrl: '/path/to/image.jpg', basePrice: 999 },
 *   { id: 2, brand: 'Brand B', name: 'Model Y', imageUrl: '/path/to/image2.jpg', basePrice: 799 },
 * ];
 *
 * <SimilarItems smartPhones={smartphones} />
 * ```
 */
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
