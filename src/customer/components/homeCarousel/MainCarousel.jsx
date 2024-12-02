import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';



export default function MainCarousel() {
    const items = mainCarouselData.map((item)=> <img className='cursor-pointer w-full h-full'  role='presentation' src={item.image} alt='image'/>)
  return (
   
   <div className=' bg-white' >
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
      
   />
    </div>
  )
}
