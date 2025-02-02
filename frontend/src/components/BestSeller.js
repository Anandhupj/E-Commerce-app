import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import './BestSeller.css'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='B1'>
        <div className='B2'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='B3'>
            "Gear up with our best sellers – top-rated sports essentials trusted by athletes and fans alike!"
            </p>

            <div className='B4'>
                {
                    bestSeller.map((item,index)=>(
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }

            </div>

        </div>
    </div>
  )
}

export default BestSeller