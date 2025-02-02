import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 bg-purple-600'>
        {/*Hero left side*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ml-8'>
              <div className='text-[#414141]'>
                 <div className='flex items-center gap-2 ml-8'>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    <p className='allerta-stencil-regular font-medium text-sm md:text-base ml-10 lg:text-2xl'>INDIA'S TRUSTED SPORTS ONLINE STORE</p>
                 </div>
                 <h1 className='allerta-stencil-regular text-3xl sm:py-11 lg:text-6xl leading-relaxed text-black ml-10 text-white font-bolder tracking-wider'>EXPLORE OUR PREMIUM COLLECTION OF SPORTS APPAREL , FITNESS, SHOES, AND ACCESSORIES.</h1>
                 <div className='flex items-center gap-2'>
                    <p className='sirin-stencil-regular font-semibold text-sm lg:text-2xl md:text-base ml-10  text-yellow-300 tracking-wider'>Gear Up for the Game & SHOP OUR EXCLUSIVE PRODUCTS NOW</p>
                    <p className='w-8 md:w-11 h-[3px] bg-[#414141]'></p>
                    {/* <button className='bg-yellow-200 px-10 mb-6'>READ MORE</button> */}
                 </div>
              </div>
        </div>
         {/* hero right side */}
         <img className='w-full sm:w-1/2 mr-8 ml-8' src={assets.hero_img} alt="" />
        

    </div>
  )
}

export default Hero