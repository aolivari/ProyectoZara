import React from 'react';
import { NavBar } from './NavBar'; // Adjust the path if necessary
import router from 'next/router';

export const SmartPhoneDetails = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{ cursor: 'pointer', paddingLeft: 48 }}
        onClick={() => router.push(`/`)}
      >
        boton back
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 110,
          flexDirection: 'column',
          alignItems: 'center',
          gap: 154,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', gap: 310 }}>
          <div>SmartPhone image</div>
          <div>SmartPhone rightData</div>
        </div>

        <div>SmartPhone specifications</div>
        <div>similarItems</div>
      </div>
    </div>
  );
};
