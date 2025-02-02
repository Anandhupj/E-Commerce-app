import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[650px] ml-2 mr-8' src={assets.about_img1} alt='' />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ml-6 mr-6'>
           <p>"At SportsJam, we’re passionate about fueling your journey to greatness. As a premier sports and fitness store, we bring you the best in quality gear, apparel, and accessories to help you perform at your peak. Whether you’re an aspiring athlete, a seasoned professional, or simply someone committed to staying active, we’re here to support your goals. Our mission is to empower every individual to embrace an active lifestyle with confidence and style. Explore our wide range of trusted brands and innovative products – because at SportsJam, your game is our passion!"</p>
           <p>"Your ultimate destination for premium sports gear,fitness and apparel. Stay active, play hard, and shop with confidence!"."Driven by a passion for sports since 2012, we bring you decades of expertise and dedication. Trusted by sportsmans and enthusiasts worldwide, our brand delivers top-quality gear, innovative designs, and an unbeatable shopping experience. Play with confidence - powered by excellence!".</p>
           <p>"At SportsJam, we provide a comprehensive range of services to support your fitness and sporting needs. From top-notch sports equipment and apparel to expert advice and seamless online shopping, we ensure your journey is hassle-free. Whether you’re gearing up for a match, setting up your home gym, or exploring fitness solutions, our curated offerings and exceptional customer support have got you covered. Experience convenience, quality, and dedication – all in one place!"</p>
           <b className='text-yellow-300'>Our Mission</b>
           <p className='text-gray-400'>"Our mission at SportsJam is to inspire and empower individuals to lead active, healthy lives by providing high-quality sports and fitness products. We are committed to fostering a community where passion for sports meets innovation, helping athletes of all levels achieve their goals and push their limits."</p>
         </div>     
      </div>

      <NewsletterBox />

      <div className='text-2xl py-4 ml-6'>
        <Title text1={'WHY'} text2={'CHOOSE US!'}/>
      </div>
        
        <div className='flex flex-col md:flex-row text-sm mb-20 ml-6 mr-6 bg-purple-900'>
          
           
          
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-yellow-200'>
            <b className='text-white text-xl'>Secure Payment Options:</b>
            <p  className='text-gray-300 font-bold'>Stripe,Razorpay,pay on delivery,Credit/debit cards, wallets, UPI, and BNPL (Buy Now Pay Later) options.</p>
            </div>
         
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-yellow-400'>
            <b className='text-white text-xl'>Convenience:</b>
            <p  className='text-gray-300 font-bold'> 24/7 availability allows users to shop from the comfort of their homes.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-yellow-400'>
            <b className='text-white text-xl'>Variety:</b>
            <p  className='text-gray-300 font-bold'>Offers an extensive range of products from multiple brands and categories.</p>
            </div>
           
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-yellow-400'>
            <b className='text-white text-xl'>Customizable Bundles: </b>
            <p  className='text-gray-300 font-bold'> Users can create personalized packages, such as a home gym setup or sports team kits.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-yellow-400'>
            <b className='text-white text-xl'>Advanced Search and Filters: </b>
            <p className='text-gray-300 font-bold'>Customers can search for products by categories, brands, sizes, prices, or specific features like eco-friendly materials </p>
            </div>    
        </div>

       

    </div>
  )
}

export default About