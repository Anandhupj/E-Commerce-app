import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
         <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
         <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='' />
         <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-yellow-300 font-bold'>FitGear Pro Store<br/>123 Fitness Avenue<br/>Active Heights, Sports City<br/>Wellness State, 456789<br/>United States<br/></p>
          <p className='text-green-300 font-bold'>Tel: +4-212-564-0987 <br/>Email: admin@sportsjam.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Sportsjam</p>
          <p className='text-yellow-300 font-bold'>Learn more about our teams and job openings.</p>
          <button className='border border-yellow-300 px-8 py-4 text-sm hover:bg-yellow-400 hover:text-white transition-all duration-500'>Explore Jobs</button>
         </div>
      </div>
        
        <NewsletterBox />
    </div>
  )
}

export default Contact