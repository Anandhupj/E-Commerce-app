import React from 'react'
import './NewsletterBox.css'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();

    }


  return (
    <div className='F1'>
        <p className='F2'>Subscribe now & get 15% off</p>
        <p className='F3'>
            Get the latest deals and more.
        </p>
        <form onSubmit={onSubmitHandler} className='F4'>
            <input className='F5' type='email' placeholder='Enter your email' required/>
            <button type='submit' className='F6'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox