import React from 'react'
import Recepies from '../shared/recepies'

const Recepie = [
  { id: 1, price: '$15', image:'/assets/images/recepi-img1.svg', image1:'/assets/images/ratings-img.svg', name1:'Cup cakes'},
  { id: 2, price: '$15', image:'/assets/images/recepi-img2.svg', image1:'/assets/images/ratings-img.svg', name1:'Donuts'},
  { id: 3, price: '$15', image:'/assets/images/recepi-img3.svg', image1:'/assets/images/ratings-img.svg', name1:'Fruit cake'},
  { id: 4, price: '$15', image:'/assets/images/recepi-img4.svg', image1:'/assets/images/ratings-img.svg', name1:'Pasteries'},
]
const Recepi = () => {
  return (
    <>
    <div className="container">
        <h2 className='pt-[50px] text-center lg:text-start lg:pt-[100px] font-poppins text-[42px] md:text-[50px] font-semibold pb-[30px] lg:pb-[65px]'>OUR HOT SELLING RECEPI</h2>
        <div className=' grid-cols-1 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-items-center'>
          {Recepie.map((recepis, id) => (
         <Recepies key={id} recepidata={recepis}/>
          ))}
        </div>
    </div>
    </>
  )
}

export default Recepi;