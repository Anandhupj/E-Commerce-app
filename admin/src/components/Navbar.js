import React from 'react'
import {assets} from "../assets/assets"
import "./Navbar.css"

const Navbar = ({setToken}) => {
  return (
    <div className='N3'>
        <img className='N1' src={assets.logo} alt='' />
        <button onClick={()=>setToken("")}  className='N2'>Logout</button>
    </div>
  )
}

export default Navbar