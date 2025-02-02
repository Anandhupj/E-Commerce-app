import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import './LatestCollection.css'

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

   

  return (
    <div className='C1'>
        <div className='C2'>
            <Title text1={'NEW ARRIVALS'} text2={'EXCLUSIVE ONLY FOR YOU'} />
            <p className='C3'>
            "Gear Up for Greatness: Discover the Latest Collection!"
            </p>
        </div>

    {/*rendering products */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 font-bold bg-gray-100 tracking-wide text-6xl ml-6 mr-6 pl-6 pr-6 pt-6 pb-6'>
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
            
        }
    </div>

    </div>
  )
}

export default LatestCollection