import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";

const Menu2 = ({image,name,price,image1,name1,button1,button2}) => {
  return (
    <>
        <div className='max-w-[390px] pb-[50px] pt-[60px] rounded-[50px] overflow-hidden bg-red-400'>
            <div className='max-w-[390px]'>
                <img src={image} alt={`${image}-img`} />
            </div>
            <div className=' max-w-[390px] pl-[20px] bg-gray-300'>
             <div className=' flex max-w-[350px] pt-[20px] justify-between'>
                <p className='text-[20px] font-poppins font-bold'>{name}</p>
                <p className='text-[28px] font-roboto font-bold text-[#A7731A]'>{price}</p>
             </div>
             <div className='flex max-w-[147px]'>
                <img src={image1} alt={`${image1}-ratings`}/>
                <p>{name1}</p>
             </div>
             <div className='flex max-w-[350px] justify-between pt-[20px] pb-[20px]'>
                <button className=' flex max-w-[165px] px-7 py-2 rounded-[30px] bg-[#A7731A] text-white gap-1'> 
                    <HiOutlineShoppingBag className="text-2xl text-white pt-[2px]"/>
                    {button1}</button>
                <button className=' flex max-w-[165px] px-7 py-2 rounded-[30px] bg-white text-[#A7731A] border-[2px] border-[#A7731A] gap-2'>
                    <HiOutlineHeart className="text-2xl text-[#A7731A] pt-[3px]" />
                    {button2}</button>
             </div>
            </div>
        </div>
    
    </>
  )
}

export default Menu2