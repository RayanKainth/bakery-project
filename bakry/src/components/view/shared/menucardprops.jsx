import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";

const Menucardprops = ({ data }) => {
    return (
        <>
            <div className='max-w-[300px] rounded-[40px] overflow-hidden w-full'>
                    <img src={data.image}/>
                <div className=' max-w-[300px] pl-[20px] lg:pl-[10px] bg-gray-200'>
                    <div className=' flex max-w-[350px] pt-[20px] justify-between'>
                        <p className='text-[20px] font-poppins font-bold'>{data.name}</p>
                        <p className='text-[24px] lg:text-[28px] pr-[20px] font-roboto font-bold text-[#A7731A]'>{data.price}</p>
                    </div>
                    <div className='flex max-w-[147px]'>
                        <img src={data.image1} alt={`${data.image1}-ratings`}/>
                        <p>{data.name1}</p>
                    </div>
                    <div className='flex max-w-[300px] gap-4 pt-[20px] pb-[20px]'>
                        <button className=' flex max-w-[150px] px-[15px] py-2 rounded-[30px] bg-[#A7731A] text-white gap-1'>
                            <HiOutlineShoppingBag className="text-lg text-white pt-[3px]" />
                            Add to Bag</button>
                        <button className='flex max-w-[150px] px-[15px] py-2 rounded-[30px] bg-white text-[#A7731A] border-[2px] border-[#A7731A] gap-1'>
                            <HiOutlineHeart className="text-lg text-[#A7731A] pt-[3px]"/>
                            Favorite</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Menucardprops;