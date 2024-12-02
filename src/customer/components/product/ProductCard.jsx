import React from 'react'

export default function ProductCard({product}) {
    
  return (
    
    
     
  <div className='w-[15rem] m-3 transition-all cursor-pointer'>
        
          <div
            class="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer relative top-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div class=" h-[20rem] ">
            <img src={product.imageUrl} alt="Product 1"
              class="h-full w-full object-cover object-left-top" />
          </div>
          <div class="text-part bg-white p-3">
            <div className='font-bold'>
            <h3 class="text-lg font-extrabold text-gray-800">{product.brand}</h3>
            <h4 class="text-lg text-gray-800 font-bold mt-2">{product.title}</h4>
            </div>
            <div className='font-semibold flex items-center gap-3'>
            <p class="text-lg font-semibold text-gray-800">{product.discountedPrice}</p>
            <p class="text-sm line-through text-gray-800 opacity-50 ">{product.price}</p>
            <p class="text-green-600 text-lg ">{product.discountPersent}%</p>
            </div>
            
            </div>
          
       
  
            </div>
      
  
 
  )
}
