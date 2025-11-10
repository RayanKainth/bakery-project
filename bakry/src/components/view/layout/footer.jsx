import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbAddressBook } from "react-icons/tb";


const Footer = () => {
  return (
    <>
    <div className='bg-[#A7731A]'>
    <div className="container">
      <div className='flex gap-20'>
        <div className='max-w-[424px] pt-[100px]'>
         <img className='max-w-[70px]' src="/assets/images/footer-img.svg" alt="images"/>
         <div className='pt-[30px]'>
         <p className='text-white font-poppins text-[24px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
           </div>
           <div className='max-w-[236px] flex gap-[10px] text-white pt-[50px]'>
           <FaFacebookF className="hover:text-blue-600 cursor-pointer w-12 h-12 bg-[#D99E39] rounded-full"/>
           <FaXTwitter className="hover:text-black cursor-pointer w-12 h-12 bg-[#D99E39] rounded-full"/>
           <FaInstagram className="hover:text-pink-500 cursor-pointer w-12 h-12 bg-[#D99E39] rounded-full"/>
           <FaYoutube className="hover:text-red-600 cursor-pointer w-12 h-12 bg-[#D99E39] rounded-full"/>
           </div>
        </div>
        <div className='max-w-[107px]'>
          <p className='font-poppins text-[24px] font-bold text-white pt-[120px]'>Pages</p>
          <ul className='pt-[30px] text-white font-poppins text-[20px]'>
            <div className='grid gap-1'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </div>
          </ul>

        </div>
        <div className='max-w-[210px] pl-[70px]'>
          <p className='text-white font-poppins font-bold text-[24px] pt-[120px]'>Company</p>
          <ul className='pt-[30px] text-white font-poppins text-[20px]'>
            <div className='grid gap-1'>
              <li>About us</li>
              <li>Contact us</li>
              <li>Career</li>
              <li>Terms</li>
              <li>Team members</li>
            </div>
          </ul>
        </div>
        <div className='max-w-[291px]'>
          <p className='text-white font-poppins font-bold text-[24px] pt-[120px]'>Contact us</p>
          <div className='pt-[30px]'>
        <div className='flex gap-1'>
          <TbAddressBook className='text-white text-[26px]'/>
          <p className='text-white font-poppins font-bold text-[20px]'>Address:</p>
        </div>
        </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer