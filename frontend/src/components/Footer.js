import React from 'react'
import { assets } from '../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='G8'>
        <div className='G1'>

            <div>
                <img src={assets.logo} className='G2' alt='' />
                <p className='G3'>
                "Your ultimate destination for premium sports gear,fitness and apparel. Stay active, play hard, and shop with confidence!"."Driven by a passion for sports since 2012, we bring you decades of expertise and dedication. Trusted by sportsmans and enthusiasts worldwide, our brand delivers top-quality gear, innovative designs, and an unbeatable shopping experience. Play with confidence - powered by excellence!".
                </p>
            </div>

            <div>
                <p className='G4'>GET TO KNOW US</p>
                <ul className='G5'>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Inquiry / Feedback</li>
                    <li>Privacy policy</li>
                    <li>Sportsjam Team</li>
                </ul>
            </div>

            <div>
                <p className='G4'>HERE TO HELP</p>
                <ul className='G5'>
                    <li>Register / Login</li>
                    <li>Delivery & Charges</li>
                    <li>Payment Options</li>
                    <li>FAQ's</li>
                    <li>Returns Policy</li>
                    <li>Track My Order</li>
                    <li>Buy in Bulk</li>
                </ul>
            </div>

        
            <div>
                <p className='G4'>GET IN TOUCH</p>
                <ul className='G5'>
                    <li>+4-212-564-0987</li>
                    <li>contact@sportsjamhubuniversal.com</li>
                </ul>
            </div>

    </div>

      <div className='G7'>
        <hr />
        <p className='G6'>Copyright 2024@ sportsjam.com - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer