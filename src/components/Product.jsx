import React from 'react';
import Card from './Card';

// Product component displaying individual product details
export default function Product({ title, price }) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
    </Card>
  );
}