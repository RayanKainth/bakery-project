import React from 'react'
import Formbox from './formbox'

const Form = () => {
  return (
    <>
    <div className="container">
    <p className='flex justify-center lg:justify-start text-[50px] font-semibold font-poppins mt-[60px] lg:mt-[100px]'>Book a reservation</p>
    <p className='flex justify-center lg:justify-start text-[24px] font-poppins pb-[65px]'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
    </div>
    <Formbox/>
    </>
  )
}

export default Form;