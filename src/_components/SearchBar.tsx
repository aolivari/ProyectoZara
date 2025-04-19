import React, { useState } from 'react';
import styles from '../CSS.modules/SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
  resultsCount: string;
  value: string;
  clearSearch: () => void;
}

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
