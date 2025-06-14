import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import './SearchBar.css'
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible,setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
      if (location.pathname.includes('collection')) {
        setVisible(true);
      }
      else {
        setVisible(false)
      }
    },[location])

  return showSearch && visible ? (
    <div className='I1'>
        <div className='I2'>
         <input value={search} onChange={(e)=>setSearch(e.target.value)} className='I3' type='text' placeholder='Search products,brand & more...'/>
         <img className='I4' src={assets.search_icon} alt='' />
        </div>
       <img onClick={()=>setShowSearch(false)} className='I5' src={assets.cross_icon} alt='' />
    </div>
  ) : null
}

export default SearchBar