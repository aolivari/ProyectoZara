import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  const [resultsCount, setResultsCount] = useState(0);

  //to do crear los llamado a la base de datos para obtener el total de resultados

  return (
    <div role="search" className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for a smartphone..."
        className="searchBar"
      />

      <p>{resultsCount} results</p>
    </div>
  );
};
