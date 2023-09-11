import React from 'react';
import en from '../public/en.json'

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={en.placeholder}
        onChange={handleSearch}
        className='border-b-2 border-yellow-500 mb-4 outline-none'
      />
    </div>
  );
};

export default SearchBar;
