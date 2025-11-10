import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaCommentAlt } from "react-icons/fa";

const Forms = [
  { id: 1, icons: <FaUser/>, placeholder: 'Name', type: 'text'},
  { id: 2, icons: <FaEnvelope/>, placeholder: 'Email', type:'Email'},
  { id: 3, icons: <FaPhone/>, placeholder: 'Phone', type: 'tel'},
]

const Formbox = () => {
  return (
    <>
    <div className="container">
        <div className='bg-[#F7F7F7] max-w-[1620px] rounded-[50px]'>
          <form action="submit">
            <div className='hidden lg:flex lg:justify-end pr-[15px] pt-[8px]'>
            <img src="/assets/images/form-img1.svg" alt="image" />
            </div>
            <div className='max-w-[1285px] mb-[40px]'>
              <p className='font-poppins text-[24px] font-bold text-[#A7731A] flex justify-center pt-[30px] lg:justify-start lg:pl-[100px]'>Check availability</p>
              <div className='grid grid-cols-1 pt-[30px] justify-items-center gap-[30px] lg:max-w-[395px] lg:pl-[25px] lg:flex lg:pt-[50px] lg:pr-[40px] xl:pl-[100px] xl:gap-20'>
              {Forms.map(formbox=> (
                  <div key={formbox.id} className=' bg-white flex rounded-[50px] px-[40px] py-[12px] gap-3 items-center'>
                    <div className='text-[#0000004D]'>
                    {formbox.icons}
                   </div>
                    <input className='outline-none' type={formbox.type} placeholder={formbox.placeholder}/>
                  </div>
              ))}
              </div>
            </div>
            <div className='max-w-[320px] lg:max-w-[1285px] bg-white flex items-center rounded-[50px] px-[40px] py-[12px] lg:rounded-[100px] lg:px-[50px] lg:py-[20px] gap-3 lg:ml-[100px] lg:mr-[85px] mx-auto'>
           <FaCommentAlt className='mt-[5px] text-[#0000004D]'/>
           <input className='w-full outline-none border-none' type="text" placeholder='Message'/>
            </div>
            <div className='flex pt-[40px] pb-[20px] lg:pb-0 justify-center lg:justify-end lg:pr-[85px]'>
              <button className='font-poppins text-[18px] text-white bg-[#A7731A] px-[20px] py-[6px] rounded-[20px]'>Apply Now</button>
            </div>
            <div className='hidden lg:block lg:pl-[20px]'>
              <img src="/assets/images/form-img2.svg" alt="Image"/>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}

export default Formbox;