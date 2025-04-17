import { useRouter } from 'next/router';
import { SmartPhoneDetails } from '../../src/_components/SmartPhoneDetails';

const SmartphoneDetails = () => {
  const router = useRouter();
  const { name } = router.query; // Obtiene el parámetro dinámico "name"

  return <SmartPhoneDetails />;
};

export default SmartphoneDetails;
