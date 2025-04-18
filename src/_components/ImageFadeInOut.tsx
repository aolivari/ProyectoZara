import React from 'react';

interface ImageFadeInOutProps {
  src: string;
}

export const ImageFadeInOut = ({ src }: ImageFadeInOutProps) => {
  return (
    <img
      src={src}
      alt=""
      style={{
        maxWidth: '100%', // La imagen no excederá el ancho del contenedor
        height: 'auto', // Mantiene la proporción de la imagen
      }}
    />
  );
};
