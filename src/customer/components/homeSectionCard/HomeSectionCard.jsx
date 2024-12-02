import React from 'react'

export default function HomeSectionCard({ product }) {
  return (
    <div className='flex w-[15rem] rounded-lg  flex-col mx-2 shadow-sm cursor-pointer overflow-hidden bg-white items-center border'>
      <div className='w-[13rem] h-[15rem] '>
        <img className='object-cover object-top w-full h-full ' src={product.imageUrl} alt="product icon" srcset="" /> 
      </div>
      <div className='p-4'>
<h2 className='text-lg text-black font-medium'>{product.brand}</h2>
<p className='text-sm mt-2 text-black font-medium'>{product.title}</p>
      </div>
    </div>
  )
}
