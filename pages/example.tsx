import React from 'react';

interface ExampleProps {
  data: string;
}

const ExamplePage = ({ data }: ExampleProps) => {
  return (
    <div>
      <h1>SSR Example</h1>
      <p>Data fetched from server: {data}</p>
    </div>
  );
};

// Esta función se ejecuta en el servidor en cada solicitud
export async function getServerSideProps() {
  // Simula una llamada a una API o base de datos
  console.log('Fetching data from server...');
  const data = 'Este es un ejemplo de SSR';

  return {
    props: {
      data, // Pasamos los datos como props al componente
    },
  };
}

export default ExamplePage;
