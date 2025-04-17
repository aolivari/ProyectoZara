import React, { useState } from 'react';

export const SearchBar = () => {
  const [resultsCount, setResultsCount] = useState(0);

  return (
    <div
      role="search"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 48px 40px 48px',
      }}
    >
      <input
        type="text"
        placeholder="Search for a smartphone..."
        className="searchBar"
        style={{
          fontFamily: 'Helvetica',
          width: '100%',
          border: 'none',
          borderBottom: '1px solid #ccc',
          outline: 'none',
          fontSize: '16px',
          fontWeight: '300',
        }}
      />
      <div
        style={{
          width: '100%',
          textAlign: 'left',
          fontFamily: 'Helvetica',
          fontWeight: 300,
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textTransform: 'uppercase',
          color: '#000001',
        }}
      >
        <p>{resultsCount} results</p>
      </div>
    </div>
  );
};
