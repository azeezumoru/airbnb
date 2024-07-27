import React from 'react'
import logo from '../images/Group.png'

export default function Hero(){
  return(
    <section className='sec-hero'>
      <img src={logo} alt='' className='group-png' />
      <h1 className='hero-head'>Online Experiences</h1>
      <p className='hero-text'>Join unique interactive activities led by 
      one-of-a-kind host-all without leaving home.</p>
    </section>
  )
}