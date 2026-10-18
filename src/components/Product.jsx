import React from 'react';
import Card from './Card';

function Product(props) {
  // Hem props.product hem de doğrudan props.name / props.price durumunu destekler
  const name = props.name || props.product?.name;
  const price = props.price || props.product?.price;

  return (
    <Card>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </Card>
  );
}

export default Product;