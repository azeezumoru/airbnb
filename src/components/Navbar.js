import React from 'react'
import bnb from '../images/airbnb.png'

export default function Navbar(){
  return(
    <nav>
      <img src={bnb} alt='' className='airbnb' />
    </nav>
  )
}