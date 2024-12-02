import React from 'react'
import MainCarousel from '../homeCarousel/MainCarousel'
import HomeSectionCarousel from '../HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'

export default function HomePage() {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 bg-white'>
        <HomeSectionCarousel  data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel  data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousel  data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel  data={mens_kurta} sectionName={"Women's Dress"} />
        <HomeSectionCarousel  data={mens_kurta} sectionName={"Men's Shoes"} />
        
       
      </div>
    </div>
  )
}
