import React from 'react';
import { SmartPhoneCard } from './SmartPhoneCard'; // Assuming you have a SmartPhoneCard component
import { SmartPhoneDetails } from '../domain/projec';

interface SmartPhoneGridProps {
  smartPhones: SmartPhoneDetails[];
}

export const SmartPhoneGrid = ({ smartPhones }: SmartPhoneGridProps) => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log('Current window size:', windowSize);

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
