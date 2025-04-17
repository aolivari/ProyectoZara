import React from 'react';
import Image from 'next/image';
import router from 'next/router';

export const NavBar = () => {
  //icono que mande al home de la app
  //carro de compras

  return (
    <div
      style={{
        padding: '28px 48px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <img
        src={'/images/home_button.png'}
        style={{ cursor: 'pointer' }}
        width={74}
        height={29}
        alt={'home'}
        onClick={() => {
          router.push(`/`);
        }}
      />
      <div style={{ display: 'flex', gap: '6px', alignItems: 'baseline' }}>
        <img
          src={'/images/bag_icon.png'}
          style={{ cursor: 'pointer' }}
          width={18}
          height={18}
          alt={'bag'}
        />
        <p
          style={{
            margin: 0,
            padding: 0,
            fontFamily: 'Helvetica',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: '16px',
            letterSpacing: '0%',
            textTransform: 'uppercase',
          }}
        >
          0
        </p>
      </div>
    </div>
  );
};
