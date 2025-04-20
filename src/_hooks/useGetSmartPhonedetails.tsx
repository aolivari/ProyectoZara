import { useQuery } from '@tanstack/react-query';
import { apiSmartPhone } from '../services/apiSmartPhone';

export const useGetSmartPhoneDetails = (path: string) => {
  console.log(path);
  const { data: smartPhoneData } = useQuery({
    queryKey: ['smartphoneData-list'],
    queryFn: () =>
      apiSmartPhone.fetchSmartPhoneDataDetails({
        path: path,
      }),
    enabled: !!path, // Solo ejecutar la consulta si path no es undefined
  });

  return { smartPhoneData: smartPhoneData };
};
