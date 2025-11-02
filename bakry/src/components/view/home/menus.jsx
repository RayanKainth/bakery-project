import React from 'react'
import Menu2 from '../shared/menu2'

const MenuData = [
    { id: 1, image:'/assets/images/menu-img1.svg', name:'Cup cakes', price:'15$', image1:'/assets/images/ratings-img.svg', name1:'(350)', button1:'Add to Bag', button2:'Favorites'},
    { id: 2, image:'/assets/images/menu-img2.svg', name:'Cup cakes', price:'15$', image1:'/assets/images/ratings-img.svg', name1:'(350)', button1:'Add to Bag', button2:'Favorites'},
    { id: 3, image:'/assets/images/menu-img3.svg', name:'Cup cakes', price:'15$', image1:'/assets/images/ratings-img.svg', name1:'(350)', button1:'Add to Bag', button2:'Favorites'},
    { id: 4, image:'/assets/images/menu-img4.svg', name:'Cup cakes', price:'15$', image1:'/assets/images/ratings-img.svg', name1:'(350)', button1:'Add to Bag', button2:'Favorites'},
    { id: 5, image:'/assets/images/menu-img5.svg', name:'Cup cakes', price:'15$', image1:'/assets/images/ratings-img.svg', name1:'(350)', button1:'Add to Bag', button2:'Favorites'},
    { id: 6, image:'/assets/images/menu-img6.svg', name:'Cup cakes', price:'15$', image1:'/assets/images/ratings-img.svg', name1:'(350)', button1:'Add to Bag', button2:'Favorites'},
    { id: 7, image:'/assets/images/menu-img7.svg', name:'Cup cakes', price:'15$', image1:'/assets/images/ratings-img.svg', name1:'(350)', button1:'Add to Bag', button2:'Favorites'},
    { id: 8, image:'/assets/images/menu-img8.svg', name:'Cup cakes', price:'15$', image1:'/assets/images/ratings-img.svg', name1:'(350)', button1:'Add to Bag', button2:'Favorites'},
]
const Menus = () => {
  return (
    <>
    <div className="container">      
    {MenuData.map(menus => (
         <Menu2 key={menus.id} image={menus.image} name={menus.name} price={menus.price} image1={menus.image1} name1={menus.name1}
          button1={menus.button1} button2={menus.button2}/>
          ))}
    </div>
    </>
  )
}

export default Menus