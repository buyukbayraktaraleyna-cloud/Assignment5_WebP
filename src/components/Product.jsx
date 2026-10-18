import React from 'react';
import Card from './Card';

function Product({ product, name, price }) {
  const productName = product?.name || name;
  const productPrice = product?.price || price;

  return (
    <Card>
      <h3>{productName}</h3>
      <p>Price: ${productPrice}</p>
    </Card>
  );
}

export default Product;