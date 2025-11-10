import React from 'react'
import Menucardprops from '../shared/menucardprops'

const MenuData = [
  { id: 1, image: '/assets/images/menu-img1.svg', name: 'Cup cakes', price: '15$', image1: '/assets/images/ratings-img.svg', name1: '(350)', },
  { id: 2, image: '/assets/images/menu-img2.svg', name: 'Cup cakes', price: '15$', image1: '/assets/images/ratings-img.svg', name1: '(350)', },
  { id: 3, image: '/assets/images/menu-img3.svg', name: 'Cup cakes', price: '15$', image1: '/assets/images/ratings-img.svg', name1: '(350)', },
  { id: 4, image: '/assets/images/menu-img4.svg', name: 'Cup cakes', price: '15$', image1: '/assets/images/ratings-img.svg', name1: '(350)', },
  // { id: 5, image: '/assets/images/menu-img5.svg', name: 'Cup cakes', price: '15$', image1: '/assets/images/ratings-img.svg', name1: '(350)', },
  // { id: 6, image: '/assets/images/menu-img6.svg', name: 'Cup cakes', price: '15$', image1: '/assets/images/ratings-img.svg', name1: '(350)', },
  // { id: 7, image: '/assets/images/menu-img7.svg', name: 'Cup cakes', price: '15$', image1: '/assets/images/ratings-img.svg', name1: '(350)', },
  // { id: 8, image: '/assets/images/menu-img8.svg', name: 'Cup cakes', price: '15$', image1: '/assets/images/ratings-img.svg', name1: '(350)', },
]
const Menucards = () => {
  return (
    <>
      <div className="container">
        <div className=' gap-8 mt-[60px] grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4'>
          {MenuData.map((menus, id) => (
            <Menucardprops key={id} data={menus}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Menucards;