import React from 'react'
import './Title.css'

const Title = ({text1,text2}) => {
  return (
    <div className='D1'>
        <p className='D2'>{text1} <span className='D3 D4'>{text2}</span></p>
        <p className='D5'></p>
    </div>
  )
}

export default Title