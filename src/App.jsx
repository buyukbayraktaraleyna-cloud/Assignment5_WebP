import React, { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 }
  ]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [showProducts, setShowProducts] = useState(true);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    const newProduct = {
      id: Date.now(),
      name: name,
      price: Number(price)
    };
    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Simple Product Dashboard</h1>
      
      {/* Gizle/Göster Butonu */}
      <button 
        onClick={() => setShowProducts(!showProducts)}
        style={{ marginBottom: '15px', padding: '8px 12px', cursor: 'pointer' }}
      >
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      {/* Ürün Ekleme Formu */}
      <form onSubmit={handleAddProduct} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Product Name: </label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Price: </label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
          />
        </div>
        <button type="submit" style={{ background: '#007bff', color: 'white', padding: '6px 12px', border: 'none', cursor: 'pointer' }}>
          Add Product
        </button>
      </form>

      {/* Ürün Listesi (Eğer showProducts true ise gösterilir) */}
      {showProducts && <ProductList products={products} />}
    </div>
  );
}

export default App;