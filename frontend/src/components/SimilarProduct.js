import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import './RelatedProducts.css'

const SimilarProduct = ({category,subCategory}) => {
     const { products } = useContext(ShopContext);
         const [related,setRelated] = useState([]);
    
         useEffect(()=>{
            if (products.length > 0) {
                
                let productsCopy = products.slice();
    
                productsCopy = productsCopy.filter((item) => category === item.category);
                productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
    
                setRelated(productsCopy.slice(5,10));
            }
    
         },[products])
  return (
    <div className='K1'>
        <div className='K2'>
          <Title text1={'Explore more'} text2={'Like this'} />
        </div>

        <div className='K3'>
          {related.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
          ))}
        </div>

    </div>
  )
}

export default SimilarProduct