import React, { useState } from 'react';
import styles from '../CSS.modules/SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
  resultsCount: string;
  value: string;
  clearSearch: () => void;
}

/**
 * A functional component that renders a search bar with an input field and a results count.
 * 
 * @param {Object} props - The props for the SearchBar component.
 * @param {(value: string) => void} props.onSearch - Callback function triggered when the input value changes.
 * @param {number} props.resultsCount - The number of search results to display.
 * @param {string} props.value - The current value of the search input.
 * @param {() => void} props.clearSearch - Callback function to clear the search input.
 * 
 * @returns {JSX.Element} The rendered search bar component.
 */
export const SearchBar = ({
  onSearch,
  resultsCount,
  value,
  clearSearch,
}: SearchBarProps) => {
  //to do crear los llamado a la base de datos para obtener el total de resultados

  return (
    <div role="search" className={styles.searchBar}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <input
          type="text"
          placeholder="Search for a smartphone..."
          className="searchBar"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />
        {value && <span onClick={() => clearSearch()}>X</span>}
      </div>

      <p>{resultsCount} results</p>
    </div>
  );
};
