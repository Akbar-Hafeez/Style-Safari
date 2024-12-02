import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

import { useState } from 'react';
export default function HomeSectionCarousel({data,sectionName}) {
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        700: { items: 3 },
        1024: { items: 4 },
    };

    

    const slidePrev = () => setActiveIndex(activeIndex-1);
    const slideNext = () => setActiveIndex(activeIndex+1);
    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>)
const syncActiveIndex = ({item}) => setActiveIndex(item);

    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-black py-5 px-5'>{sectionName}</h2>
            <div className='relative p-5  '>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                onSlideChanged={syncActiveIndex}
                activeIndex={activeIndex}
                />
                
                {activeIndex !== items.length-4 && <Button onClick={slideNext} variant='contained' sx={{position:'absolute',top:'11rem',right:'0',transform:'translateX(50%) rotate(90deg)',bgcolor:'white'}} className='z-50' aria-label='next' >
               <KeyboardArrowLeftIcon sx={{transform:'rotate(90deg)',color:'black'}}/>
               </Button>}
                {activeIndex!==0 && <Button onClick={slidePrev} variant='contained' sx={{position:'absolute',top:'11rem',left:'0',transform:'translateX(-50%) rotate(90deg)',bgcolor:'white'}} className='z-50' aria-label='prev' >
               <KeyboardArrowLeftIcon sx={{transform:'rotate(-90deg) ',color:'black'}}/>
               </Button>}
            </div>
        </div>
    )
}
