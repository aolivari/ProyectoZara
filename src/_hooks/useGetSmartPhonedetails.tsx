import { useQuery } from '@tanstack/react-query';
import { apiSmartPhone } from '../services/apiSmartPhone';

export const useGetSmartPhoneDetails = (path: string) => {
  const { data: smartPhoneData } = useQuery({
    queryKey: ['smartphoneData-list'],
    queryFn: () =>
      apiSmartPhone.fetchSmartPhoneDataDetails({
        path: path,
      }),
    enabled: !!path,
  });

  return { smartPhoneData: smartPhoneData };
};
