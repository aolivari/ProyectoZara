/**
 * Component: SmartPhonesList
 *
 * This component renders a list of smartphones with a search functionality.
 * It utilizes a search bar to filter the list of smartphones and displays the results
 * in a grid layout.
 *
 * Hooks:
 * - `useGetSmartPhoneList`: Custom hook to fetch and manage the smartphone data.
 *
 * Child Components:
 * - `SearchBar`: A reusable search bar component for filtering the smartphone list.
 * - `SmartPhoneGrid`: A grid layout component for displaying the list of smartphones.
 *
 * Props:
 * - None
 *
 * State/Variables:
 * - `smartPhoneData`: The list of smartphones fetched from the custom hook.
 * - `setSearchData`: Function to update the search query.
 * - `searchData`: The current search query string.
 *
 * Behavior:
 * - The `SearchBar` component allows users to input a search query, which updates the
 *   `searchData` state via the `setSearchData` function.
 * - The `SmartPhoneGrid` component displays the filtered list of smartphones based on
 *   the `smartPhoneData`.
 * - A clear search functionality is provided to reset the search query.
 *
 * Styling:
 * - The `SmartPhoneGrid` is wrapped in a `div` with a bottom margin of 473px.
 */
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
