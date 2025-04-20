import { useQuery } from '@tanstack/react-query';
import { apiSmartPhone } from '../services/apiSmartPhone';
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
      }, 300), // 300ms delay
    []
  );

  useEffect(() => {
    // Call the debounced function every time searchData changes
    debouncedSetSearchData(searchData);

    // Clean up the debounce on component unmount
    return () => {
      debouncedSetSearchData.cancel();
    };
  }, [searchData, debouncedSetSearchData]);

  const { data: smartPhoneData } = useQuery({
    queryKey: ['smartphoneData-list', debouncedSearchData],
    queryFn: () =>
      apiSmartPhone.fetchSmartPhoneDataList({
        path: path,
        search: searchData,
      }),
  });

  return { smartPhoneData: smartPhoneData, setSearchData, searchData };
};
