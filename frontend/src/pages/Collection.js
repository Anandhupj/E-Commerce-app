import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import './Collection.css'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

 const { products ,search , showSearch } = useContext(ShopContext);
 const [showFilter,setShowFilter] = useState(false);
 const [filterProducts,setFilterProducts] = useState([]);
 const [category,setCategory] = useState([]);
 const [subCategory,setSubCategory] = useState([]);
 const [sortType,setSortType] = useState('relavent')

 const toggleCategory = (e) => {
  if (category.includes(e.target.value)) {
    setCategory(prev=> prev.filter(item => item !== e.target.value))
    
  }
  else{
    setCategory(prev => [...prev,e.target.value])
  }
 }

 const toggleSubCategory = (e) => {
  if (subCategory.includes(e.target.value)) {
    setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    
  }
  else{
    setSubCategory(prev=> [...prev,e.target.value])
  }
 }

 const applyFilter = () => {
  let productsCopy = products.slice();

  if (showSearch && search) {
    productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }

  if (category.length > 0) {
    productsCopy = productsCopy.filter(item => category.includes(item.category));
     }
     if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
     }
  setFilterProducts(productsCopy)
 }

 const sortProduct = () => {

  let fpCopy = filterProducts.slice();

  switch (sortType) {
    case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
      break;

     case 'high-low':
      setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
      break;
      
     default:
      applyFilter();
      break; 
  }

 }
 
 useEffect(()=>{
     applyFilter();
 },[category,subCategory,search,showSearch])

 useEffect(()=>{
  sortProduct();

 },[sortType])


  return (
    <div className='H1'>

      {/*filter option */}
      <div className='H2'>
        <p onClick={()=>setShowFilter(!showFilter)} className='H3'>FILTERS
          <img className={`H11 ${showFilter ? 'H12' : 'H13'}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/*catagory filter */}
        <div className={`H4 ${showFilter ? 'H5' :'H6'}`}>
          <p className='H7'>CATEGORIES</p>
          <div className='H8'>
            <p className='H9'>
              <input className='H10' type='checkbox' value={'Sports'} onChange={toggleCategory}/>SPORTS
            </p>
            <p className='H9'>
              <input className='H10' type='checkbox' value={'FITNESS'} onChange={toggleCategory}/>FITNESS
            </p>
            <p className='H9'>
              <input className='H10' type='checkbox' value={'Shoes,Clothing & others'} onChange={toggleCategory}/>SHOES,CLOTHING & OTHERS
            </p>
          </div>
        </div>
        {/* subcatagory filter */}
        <div className={`H4 ${showFilter ? 'H5' :'H6'}`}>
          <p className='H7'>SPORT TYPE</p>
          <div className='H8'>
            <p className='H9'>
              <input className='H10' type='checkbox' value={'TeamSports'} onChange={toggleSubCategory}/>TEAM SPORTS
            </p>
            <p className='H9'>
              <input className='H10' type='checkbox' value={'RACKET SPORTS'} onChange={toggleSubCategory}/>RACKET SPORTS
            </p>
            <p className='H9'>
              <input className='H10' type='checkbox' value={'Sports Essentials'} onChange={toggleSubCategory}/>SPORTS ESSENTIALS
            </p>
          </div>
        </div>
      </div>

      {/*right side */}
      <div className='H14'>

        <div className='H15'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/> 
          {/* product sort */}
           <select onChange={(e)=>setSortType(e.target.value)} className='H16'>
            <option value='relavent'>Sort By Relavent</option>
            <option value='low-high'>Sort By Low-High</option>
            <option value='high-low'>Sort By High-Low</option>
           </select>
        </div>

        {/* map products */}
        <div className='H17'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />

            ))
          }

        </div>

      </div>
        
    </div>
  )
}

export default Collection