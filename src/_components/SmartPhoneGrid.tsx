import React from 'react';
import { SmartPhoneCard } from './SmartPhoneCard'; // Assuming you have a SmartPhoneCard component
import { SmartPhoneDetails } from '../domain/projec';

interface SmartPhoneGridProps {
  smartPhones: SmartPhoneDetails[];
}

export const SmartPhoneGrid = ({ smartPhones }: SmartPhoneGridProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      }}
    >
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
