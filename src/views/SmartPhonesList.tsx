import React from 'react';
import { SearchBar } from '../_components/SearchBar';
import { SmartPhoneGrid } from '../_components/SmartPhoneGrid';
import { useGetSmartPhoneList } from '../_hooks/useGetSmartphoneList';

export const SmartPhonesList = () => {
  const { smartPhoneData, setSearchData, searchData } =
    useGetSmartPhoneList('products');
  return (
    <>
      <SearchBar
        onSearch={setSearchData}
        resultsCount={smartPhoneData?.length.toString() ?? '0'}
        value={searchData as string}
        clearSearch={() => setSearchData('')}
      />
      <div style={{ marginBottom: 473 }}>
        <SmartPhoneGrid smartPhones={smartPhoneData ?? []} />
      </div>
    </>
  );
};
