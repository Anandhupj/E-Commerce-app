import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible,setVisible] = useState(false);

    const { setShowSearch, getCartCount , navigate, token, setToken, setCartItems } = useContext(ShopContext)

    const Logout = () => {
      navigate("/login")
      localStorage.removeItem("token")
      setToken("")
      setCartItems({})
     
    }
  
    

  return (
    <div className='A1'>

      <Link to='/'><img src={assets.logo} className='A2' alt="" /></Link>

    <ul className='A3'>

      <NavLink to='/' className='A4'>
        <p>HOME</p>
        <hr className='A5' />
      </NavLink>
      <NavLink to='/collection' className='A4'>
        <p>COLLECTION</p>
        <hr className='A5' />
      </NavLink>
      <NavLink to='/about' className='A4'>
        <p>ABOUT</p>
        <hr className='A5' />
      </NavLink>
      <NavLink to='/contact' className='A4'>
        <p>CONTACT</p>
        <hr className='A5' />
      </NavLink>

    </ul>

    <div className='A6'>
           <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='A7' alt="" />
           <div className='A8'>
               
                <img  onClick={() => token ? null : navigate("/login")} className='A7' src={assets.profile_icon} alt="" />
                {/* Drop down menu*/}
              {token && 
              <div className='A9'>
                <div className='A10'>
                    <p onClick={()=>navigate("/my-profile")}  className='A11'>My Profile</p>
                    <p onClick={()=>navigate("/orders")} className='A11'>Orders</p>
                    <p onClick={Logout} className='A11'>Logout</p>
                </div>
              </div>
              }
           </div>
           <Link to='/cart' className='A12'>
               <img src={assets.cart_icon} className='A13' alt="" />
               <p className='A14'>{getCartCount()}</p>
           </Link>
           <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='A15' alt="" />
    </div>

    {/* Sidebar menu for small screen */}
    <div className={`A16 ${visible ? 'A17' : 'A18'}`}>
      <div className='A19'>
       <div onClick={()=>setVisible(false)} className='A20'>
          <img className='A21' src={assets.dropdown_icon} alt=""/> 
          <p>Back</p> 
        </div>
        <NavLink onClick={()=>setVisible(false)} className='A22' to='/'>HOME</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='A22' to='/collection'>COLLECTION</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='A22' to='/about'>ABOUT</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='A22' to='/contact'>CONTACT</NavLink>
    </div>
    </div>


    </div>
  )
}

export default Navbar