import React from 'react';
import { FaStar } from "react-icons/fa";
import './Card.css';

export default function Card({ item }) {
  return (
    <div className='card'>
      <div>
      <div className='sold'>SOLD OUT</div>
      <img src={item.image} alt='' className='card-image' />
      <div className='card-content'>
        <div className='card-rating'>
          <FaStar className='star-icon' />
          <span>{item.rating}</span>
          <small>{item.nextrated}</small>
          <h5>{item.country}</h5>
        </div>
        <h3>{item.details}</h3>
        <h4>from ${item.price} / person</h4>
      </div>
      </div>
    </div>
  );
}
