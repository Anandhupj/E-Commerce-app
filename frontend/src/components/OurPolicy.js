import React from 'react'
import './OurPolicy.css'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='E1'>

        {/* <div>
            <img src={assets.exchange_icon} className='E2' alt='' />
            <p className='E3'>Easy Exchange Policy</p>
            <p className='E4'>"Easy Exchanges – Hassle-Free Returns!"</p>
        </div> */}
        <div>
            <img src={assets.authenticity_icon} className='E2' alt='' />
            <p className='E3'>100% Authentic</p>
            <p className='E4'>"Guaranteed 100% Authentic – Quality You Can Trust!"</p>
        </div>
        <div>
            <img src={assets.security_icon} className='E2' alt='' />
            <p className='E3'>Secure Shopping</p>
            <p className='E4'>"Secure Shopping – Your Safety, Our Priority!"</p>
        </div>
       
        <div>
            <img src={assets.fastdelivery_icon} className='E2' alt='' />
            <p className='E3'>Express shipping</p>
            <p className='E4'>"Express Shipping – Fast, Reliable Delivery!"</p>
        </div>
        <div>
            <img src={assets.tennisracket_icon} className='E2' alt='' />
            <p className='E3'>Customized Services</p>
            <p className='E4'>"Customized Gear – Made for Your Game Just for You!"</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='E2' alt='' />
            <p className='E3'>7 Days Return Policy</p>
            <p className='E4'>"7-Day Returns – Shop Worry-Free!"</p>
        </div>
        <div>
            <img src={assets.manual_icon} className='E2' alt='' />
            <p className='E3'>Buyers Guide</p>
            <p className='E4'>"Buyer’s Guide – Your Playbook to Perfect Picks!"</p>
        </div>
       
       
        {/* <div>
            <img src={assets.support_img} className='E2' alt='' />
            <p className='E3'>Best Customer Support</p>
            <p className='E4'>"24/7 Customer Support – We're Here to Help!"</p>
        </div> */}

    </div>
  )
}

export default OurPolicy