import React from 'react';
import Product from './Product';

// ProductList component to render static array of products
export default function ProductList() {
  // Static product data array
  const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 600 }
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map((item) => (
        <Product 
          key={item.id} 
          title={item.title} 
          price={item.price} 
        />
      ))}
    </div>
  );
}