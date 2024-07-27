import React from 'react'
import star from '../images/Star.png'
import bike from '../images/mountain-bike.png'

export default function Card2(){
  return(
    <div className='card'>
      <img src={bike} className='bike-img' alt='' />
      <div className='card-stats'>
        <img src={star} className='card-star' alt='' />
        <span>4.8</span>
        <span className='gray'>(2) * </span>
        <span className='gray'>USA</span>
      </div>
      <p>group mountain biking</p>
      <p><span className='bold'>from $50</span> / person</p>
    </div>
  )
}