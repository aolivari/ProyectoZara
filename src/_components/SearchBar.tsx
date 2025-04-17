import React, { useState } from 'react';
import styles from '../CSS.modules/SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
  resultsCount: string;
}

export const SearchBar = ({ onSearch, resultsCount }: SearchBarProps) => {
  //to do crear los llamado a la base de datos para obtener el total de resultados

  return (
    <div role="search" className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for a smartphone..."
        className="searchBar"
        onChange={(e) => onSearch(e.target.value)}
      />

      <p>{resultsCount} results</p>
    </div>
  );
};
