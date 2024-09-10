import React from 'react'
import data from '../utils/medicinelist';
import Medicines from '../components/Medicines';

const Catalog = () => {
  return (
    <div className='container mx-auto p-6'>
      <Medicines medicines={data} />
    </div>
  );
}

export default Catalog;
