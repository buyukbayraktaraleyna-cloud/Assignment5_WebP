import React, { useState } from 'react';
import ProductList from './components/ProductList';

// App component managing main state and controlled form inputs
export default function App() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product:", { productName, productPrice });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Simple Product Dashboard</h1>
      
      {/* Controlled Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <label>Product Name: </label>
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <label>Price: </label>
          <input 
            type="number" 
            value={productPrice} 
            onChange={(e) => setProductPrice(e.target.value)} 
          />
        </div>
        <button type="submit">Add Product</button>
      </form>

      <ProductList />
    </div>
  );
}