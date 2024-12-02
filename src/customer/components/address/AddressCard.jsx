import React from 'react'

export default function AddressCard() {
  return (
    <div class="space-y-6 mt-3">
    <div class=" items-start gap-6">
      
      <div>
        <h1 class="text-lg text-white">Akbar Hafeez</h1>
       <h1 className='text-sm my-4'>Mc 460 5/17/1-c green town </h1>
       <h1 className='text-sm my-4'>Karachi, <span className='px-2'>Sindh,</span><span>75100</span>  </h1>
       <h1 className='text-lg my-4'>Phone Number</h1>
       <h1 className='text-sm my-'>+923368165605</h1>
      </div>
      <div class="   max-sm:flex-col mt-10">
   
   <button  type="submit" class="rounded-md px-6  py-3 text-sm font-semibold bg-[#ece0e0] text-black hover:bg-[#222]">Deliver Here</button>
 </div>
    </div>
   
  </div>
  )
}
