import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import './Product.css'
import RelatedProducts from '../components/RelatedProducts';
import SimilarProduct from '../components/SimilarProduct';

const Product = () => {

   const {productId} = useParams();
   const {products, currency,addToCart} = useContext(ShopContext);
   const [productData,setProductData] = useState(false);
   const [image,setImage] = useState('')
   const [size,setSize] = useState('')

   const fetchProductData = async () => {

    products.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
       setImage(item.image[0]) 
        return null;
      }
    })

   }

   useEffect(()=>{
     fetchProductData();
   },[productId, products])

  return productData ? (
    <div className='J1'>
        {/*Product Data */}
      <div className='J2'>

        {/*Product Images */}
        <div className='J3'>
          <div className='J4'>
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='J5' alt='' />
                ))
              }
          </div>
          <div className='J6'>
             <img className='J7' src={image} alt='' />
          </div>
       </div>

       {/* Product Info */}
       <div className='J8'>
        <h1 className='J9'>{productData.name}</h1>
        <div className='J10'>
          <img src={assets.star_icon} alt='' className='J11' />
          <img src={assets.star_icon} alt='' className='J11' />
          <img src={assets.star_icon} alt='' className='J11' />
          <img src={assets.star_icon} alt='' className='J11' />
          <img src={assets.star_dull_icon} alt='' className='J11' />
          <p className='J12'>{144}</p>
        </div>
        <p className='J13'>{currency}{productData.price}</p>
        <p className='J14'>{productData.description}</p>
        <div className='J15'>
           <p>SIZE :</p>
           <div className='J16'>
            {productData.sizes.map((item,index)=>(
              <button onClick={()=>setSize(item)} className={`J17 ${item === size ? 'J18' : ''}`} key={index}>{item}</button>
            ))}
           </div>
        </div>
        <button onClick={()=>addToCart(productData._id,size)} className='J19'>ADD TO CART</button>
        <hr className='J20'/>
        <div className='J21'>
            <p>100% Original product.</p>
            <p>FREE delivery - product will delivered in 3 Days.Details Or EXPRESS delivery Tomorrow.Order within 11 hrs 45 mins.Details</p>
            <p>Pay on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
            <p>Top Brand.</p>
            <p>Sportsjam Delivered.</p>
            <p>EMI available.</p>
            <p>Secure transaction.</p>
            <p>6 Months Replacement Warranty on Manufacturing Defects for every products.</p>
        </div>
       </div>
      </div>
      
        {/*display related products */}

        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

      {/*Description & review section */}
        <div className='J22'>
          <div className='J23'>
             <b className='J24'>Description</b>
             <p className='J24'>Reviews(144)</p>
          </div>
          <div className='J25'>
            <p>Sportsjam is an online platform designed to cater to the needs of fitness enthusiasts, athletes, sports professionals, and casual users seeking quality equipment, apparel, and accessories. The platform offers a seamless shopping experience, enabling users to browse, select, and purchase products from a wide range of categories related to sports and fitness. Here's a detailed description of this website:</p>
            <p>The primary goal of a sports and fitness e-commerce website is to make high-quality sports equipment and fitness gear accessible to a global audience. By leveraging technology, the platform aims to provide a user-friendly interface, competitive pricing, and personalized recommendations, ensuring that customers can easily find products tailored to their specific needs. The website often focuses on promoting an active lifestyle, encouraging health and wellness, and fostering a community of like-minded individuals.</p>
            <p>Product Categories:Sports Equipment: Bats, balls, rackets, nets, and other gear for sports like cricket, football, basketball, tennis, etc.Fitness Gear: Yoga mats, dumbbells, resistance bands, treadmills, and other gym equipment.Apparel & Footwear: Sportswear for men, women, and kids, including jerseys, shorts, compression wear, running shoes, and cleats.Accessories: Water bottles, gym bags, fitness trackers, and gloves.Nutritional Supplements: Protein powders, energy drinks, and vitamins to support fitness goals.</p>
            <p>Benefits---Convenience: 24/7 availability allows users to shop from the comfort of their homes.Variety: Offers an extensive range of products from multiple brands and categories.Cost-Effectiveness: Competitive prices, discounts, and seasonal offers make fitness affordable.Education: Customers gain insights through expert advice and product reviews.</p>
            <p>The platform is designed with a clean, modern aesthetic, emphasizing intuitive navigation. Key features include: Easy Sign-Up/Log-In: With options for social media or email integration.Responsive Design: Optimized for mobile, tablet, and desktop devices.Secure Payment Options: Credit/debit cards, wallets, UPI, and BNPL Buy Now Pay Later options.Quick Delivery and Tracking: Reliable shipping services with real-time order tracking.</p>
          </div>
        </div>
        
        {/*display similar products */}

        <SimilarProduct category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='J26'></div>
}

export default Product