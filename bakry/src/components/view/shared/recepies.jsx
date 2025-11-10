import React from 'react'

const Recepies = ({recepidata}) => {
  return (
    <>
    <div className='max-w-[250px] pt-[20px] sm:max-w-[390px] w-full rounded-[40px] shadow-xl transition-all duration-300 ease-in-out
       hover:scale-105 hover:shadow-xl cursor-pointer'>
        <img src={recepidata.image} alt={`${recepidata.image}-img`}/>
        <div className='grid justify-items-center'>
        <p className='font-roboto text-[24px] md:text-[30px] text-[#A7731A] pt-3'>{recepidata.price}</p>
        <p className='font-poppins text-[16px] md:text-[20px] font-bold'>{recepidata.name1}</p>
        <img className='mb-6' src={recepidata.image1} alt={`${recepidata.image1}`}/>
        </div>
    </div>
    </>
  )
}

export default Recepies