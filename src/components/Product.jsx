import React from 'react';
import Card from './Card';

function Product(props) {
  // Gelen verinin prop adını yakalayamama ihtimaline karşı tüm yolları deniyoruz
  const name = props.name || props.title || props.product?.name || props.product?.title || props.item?.name || "Ürün";
  const price = props.price || props.product?.price || props.item?.price || 0;

  return (
    <Card>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </Card>
  );
}

export default Product;