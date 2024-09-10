import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className='flex justify-center my-4'>
      <div className='relative w-full max-w-md'>
        <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
        <input
          type="text"
          placeholder="Search for medicines or category..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 border border-gray-300 p-2 rounded-lg w-full"
          style={{ maxWidth: '500px' }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
