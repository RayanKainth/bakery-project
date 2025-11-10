import React from 'react'

const Testimonials = [
    { id : 1, image:'/assets/images/testimonial-img1.svg', image1:'/assets/images/testimonial-img2.svg', image2:'/assets/images/ratings-img.svg'},
    { id : 2, image:'/assets/images/testimonial-img1.svg', image1:'/assets/images/testimonial-img2.svg', image2:'/assets/images/ratings-img.svg'},
    { id : 3, image:'/assets/images/testimonial-img1.svg', image1:'/assets/images/testimonial-img2.svg', image2:'/assets/images/ratings-img.svg'},
]
const Testimonial = () => {
  return (
    <>
    <div className="container">
        <p className='font-poppins text-[#ACAAAA] text-[30px] font-semibold mt-[50px] flex justify-center lg:justify-start lg:mt-[100px] xl:mt-[200px]'>TestiMonials</p>
        <p className='font-poppins text-[40px] sm:text-[50px] font-semibold flex justify-center lg:justify-start mb-[65px]'>What our clients say</p>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-7 justify-center">
        {Testimonials.map(testimonial => (
        <div key={testimonial.id} className='max-w-[350px] sm:max-w-[400px] sm:pt-[20px] lg:max-w-[450px] xl:max-w-[520px] bg-[#F7F7F7] p-6 rounded-[40px] shadow-md'>
            <div className='flex justify-end'>
            <img src={testimonial.image1} alt='image' className="-mt-10"/>
            </div>
            <div className='flex justify-between'>
            <img className='max-w-[100px]' src={testimonial.image} alt='image' />
            <img src={testimonial.image2} alt='ratings'/>
            </div>
 <div className='max-w-[460px]'>
            <p className='font-poppins text-[15px] pt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text</p>
</div>
            <p className='font-poppins text-[20px] lg:text-[24px] font-semibold text-[#A7731A] pt-[40px]'>Maxwell</p>
        </div>
          ))}
    </div>
    </div>
    </>
  )
}

export default Testimonial ;