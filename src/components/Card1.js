import React from 'react';
import Card from './Card';
import { card } from '../data';

export default function Card1() {
  return (
    <div className='card-list'>
      {card.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
