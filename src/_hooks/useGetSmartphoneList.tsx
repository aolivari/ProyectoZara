import { useQuery } from '@tanstack/react-query';
import { fetchSmartPhoneData } from '../services/apiSmartPhone';
import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

export const useGetSmartPhoneList = (path: string) => {
  const [searchData, setSearchData] = useState<string | undefined>();
  const [debouncedSearchData, setDebouncedSearchData] = useState<
    string | undefined
  >();

  const debouncedSetSearchData = useMemo(
    () =>
      debounce((value: string | undefined) => {
        setDebouncedSearchData(value);
      }, 300), // 300ms de retraso
    []
  );

  useEffect(() => {
    // Llamar a la función debounced cada vez que searchData cambie
    debouncedSetSearchData(searchData);

    // Limpiar el debounce al desmontar el componente
    return () => {
      debouncedSetSearchData.cancel();
    };
  }, [searchData, debouncedSetSearchData]);

  const { data: smartPhoneData } = useQuery({
    queryKey: ['smartphoneDatas', debouncedSearchData],
    queryFn: () => fetchSmartPhoneData({ path: path, search: searchData }),
  });

  return { smartPhoneData: smartPhoneData, setSearchData, searchData };
};
