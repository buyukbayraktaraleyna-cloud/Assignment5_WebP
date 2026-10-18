import React from 'react';
import Card from './Card';

function Product({ product }) {
  return (
    <Card>
      <h3>{product?.name}</h3>
      <p>Price: ${product?.price}</p>
    </Card>
  );
}

export default Product;