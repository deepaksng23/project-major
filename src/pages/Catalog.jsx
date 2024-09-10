import React, { useState } from 'react';
import data from '../utils/medicinelist';
import Medicines from '../components/Medicines';
import SearchBar from '../components/SearchBar';

const Catalog = () => {
  const [query, setQuery] = useState('');

  const filteredMedicines = data.filter((medicine) =>
    medicine.name.toLowerCase().includes(query.toLowerCase()) // || medicine.info.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='container mx-auto p-6'>
      <SearchBar query={query} setQuery={setQuery} />
      <Medicines medicines={filteredMedicines} />
    </div>
  );
}

export default Catalog;
