import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (

     <div className="container">
    <div className="flex gap-12 max-w-[1623px] w-full">
      <div className=' p-[10px] sm:w-[72px] lg:w-[85px]'>
      <img src="/assets/images/logo.svg"
       alt="Company logo"/>
       </div>
       <div className="hidden lg:max-w-[630px] lg:flex items-center justify-end flex-1">
        <ul className='flex gap-10 font-poppins cursor-pointer'>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
       </div>
       <div className="hidden sm:hidden md:hidden lg:flex gap-8 items-center justify-end flex-1">
        <button className='p-3 border rounded-3xl bg-[#A7731A] text-white'>
          <FiSearch />
        </button>
         <button className="p-3 border rounded-3xl bg-[#A7731A] text-white">
      <FiUser/>
    </button>
        <button className='p-3 border rounded-3xl bg-[#A7731A] text-white'>
          <FiCalendar/>
        </button>
        </div>
        <button className='w-full flex justify-end items-center text-[#A7731A] lg:hidden'>
          <FiMenu className='text-3xl'/>
        </button>
    </div>
    </div>
  )
}

export default Navbar;