import React, { useState } from 'react';

const Card = ({ id, name, info, image, price }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 50)}...`;

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 duration-300'>
      {/* Image */}
      <img
        src={image}
        alt={name}
        className='w-full scale-90 h-64 object-cover object-center rounded-t-lg'
      />
      
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h4 className='text-lg font-semibold'>{name}</h4>
          <h4 className='text-lg font-semibold text-green-600'>₹ {price}</h4>
        </div>
        <p className='text-sm text-gray-600 mt-2'>{description}</p>

        {/* Read More Button */}
        <span
          className='text-blue-600 cursor-pointer mt-2 inline-block hover:text-blue-800 transition-colors duration-200'
          onClick={readMoreHandler}
        >
          {readMore ? 'Show Less' : 'Read More'}
        </span>
      </div>
    </div>
  );
};

export default Card;
