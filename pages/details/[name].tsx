import { useRouter } from 'next/router';

const SmartphoneDetails = () => {
  const router = useRouter();
  const { name } = router.query; // Obtiene el parámetro dinámico "name"

  return (
    <div>
      <h1>Hola Mundo</h1>
      <p>Estás viendo los detalles del smartphone: {name}</p>
    </div>
  );
};

export default SmartphoneDetails;
