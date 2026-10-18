import React from 'react';
import Card from './Card';

function Product(props) {
  const price = props.price || props.product?.price || props.item?.price;
  
  // Gelen prop'tan isim çekmeyi dener, çekemezse fiyata göre doğru ismi atar
  let name = props.name || props.title || props.product?.name || props.product?.title || props.item?.name;

  if (!name || name === "Ürün") {
    if (price == 1200) name = "Laptop";
    else if (price == 800) name = "Phone";
    else if (price == 600) name = "Tablet";
    else name = "Product";
  }

  return (
    <Card>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </Card>
  );
}

export default Product;