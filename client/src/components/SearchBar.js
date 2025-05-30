import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search jobs..."
      onChange={(e) => onSearch(e.target.value)}
      style={{
        padding: '10px',
        width: '100%',
        maxWidth: '400px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '20px',
      }}
    />
  );
};

export default SearchBar;