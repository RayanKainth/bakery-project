import React from 'react';

const Product = ({ image, name }) => {
  return (
   
    <div className='max-w-[200px] mx-auto p-12 shadow-md rounded-[30px] sm:px-16 sm:py-12 grid transition-all duration-300 ease-in-out
       hover:scale-105 hover:shadow-lg cursor-pointer sm:w-full sm:max-w-[300px] md:max-w-[350px] md:px-24 md:py-14 lg:p-12'>
        <div className=' max-w-[164px] grid justify-items-center sm:w-full'>
          <img src={image} alt={`${name}-img`} />
          <p className='flex justify-center pt-[20px] font-poppins'>{name}</p>
        </div>
    </div>

    
  );
};

export default Product;
