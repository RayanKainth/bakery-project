import React from 'react'
import Product from '../shared/product';
import Aboutus from './aboutus'
import Recepi from './recepi';
import Ourmenuheader from './ourmenuheader';
import Menucards from './menucard';
import Testimonial from './testimonial';
import Form from '../form';

const Products = [
  { id: 1, name: 'Biscuits', image: '/assets/images/product-img1.svg' },
  { id: 2, name: 'Breads', image: '/assets/images/product-img2.svg' },
  { id: 3, name: 'Cakes', image: '/assets/images/product-img3.svg' },
  { id: 4, name: 'Sweets', image: '/assets/images/product-img4.svg' },
  { id: 5, name: 'Pasteries', image: '/assets/images/product-img5.svg' },
];
const Home = () => {

  return (
    <>
      <div className="w-full h-[850px] bg-cover bg-center bg-[url('/assets/images/hero-section-bg.svg')] relative">
        <div className="container">

          <img className='hidden lg:block lg:absolute lg:max-w-[200px] xl:max-w-[324px] right-[80px]' src="/assets/images/hero-section-img1.svg"
            alt="Cookie-img" />
          <h1 className='pt-[50px] sm:pt-[100px] font-lato text-[50px] font-bold md:pt-[150px]'>WE BAKE WITH<br></br> PASSION.</h1>
          <div class="max-w-[320px] sm:max-w-[640] sm:text-3xl text-[24px] pt-[30px] pb-[50px] md:max-w-[50%] md:pb-[80px] lg:max-w-[50%]">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <button className="rounded-[20px] bg-[#A7731A] text-white px-6 py-2">View Menu</button>
        </div>
        <img className='hidden lg:block absolute left-[300px] lg:max-w-[200px] xl:max-w-[324px]' src="/assets/images/hero-section-img2.svg"
          alt="cookie-img" />
      </div>
      <div className="container">
        <p className='pb-[50px] text-center lg:text-start sm:pb-[80px] pt-[50px] text-[42px] md:text-[50px] font-poppins'>PRODUCTS</p>
        <div className="grid grid-cols-1 gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-8 xl:gap-4">
          {Products.map(product => (
            <Product key={product.id} image={product.image} name={product.name} />
          ))}
        </div>
      </div>
      <Aboutus />
      <Recepi />
      <Ourmenuheader/>
      <Menucards/>
      <Testimonial/>
      <Form/>
    </>

  )
}

export default Home;