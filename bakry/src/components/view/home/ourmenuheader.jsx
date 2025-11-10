import React from 'react'

const Menus = [
    { id: 1, text: 'All' },
    { id: 2, text: 'Cup cakes' },
    { id: 3, text: 'cookies' },
    { id: 4, text: 'Breads' },
    { id: 5, text: 'Donuts' },
    { id: 6, text: 'Pasteries' },
]

const Ourmenuheader = () => {
    return (
        <div className='container'>
            <div className='flex justify-center pb-[30px] xl:justify-start'>
                <h2 className='text-[50px] font-poppins font-semibold pt-[130px]'>OUR menu</h2>
            </div>
            <div className='justify-center flex-wrap flex gap-1 w-full xl:justify-start '>
                {Menus.map((ls) => (
                    <p key={ls.id} className='font-poppins text-[20px] rounded-[20px] h-full px-12 py-2 text-center bg-[#F7F7F7] cursor-pointer'> {ls.text}</p>))}
            </div>
        </div>
    )
}

export default Ourmenuheader