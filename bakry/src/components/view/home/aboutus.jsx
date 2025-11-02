import React from 'react'

const Aboutus = () => {
  return (
    <>
    <div className='container'>
      <div className='max-w-[1620px] lg:flex pt-[80px] lg:pt-[147px]'>
      <div className='max-w-[751px] lg:max-w-[1024px] xl:max-w-[751px]'>
      <h2 className='font-poppins text-[40px] md:text-[50px] font-bold text-center md:text-start'>ABOUT US</h2>
      <div className='pt-[30px] lg:pt-[10px] xl:pr-[50px]'>
      <p className='font-poppins text-[20px] md:text-[24px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
      </div>
      <div className='pt-[40px]'>
        <button className='rounded-[30px] bg-[#A7731A] text-white px-[20px] py-2 text-[18px] font-poppins'>Learn more</button>
      </div>
      </div>
        <img className=' pt-[50px] lg:block lg:max-w-[500px] lg:w-full xl:max-w-[700px]' src="/assets/images/about-us-img.svg" alt="Bakry img"/>
        </div>
    </div>
    </>
  )
}

export default Aboutus;