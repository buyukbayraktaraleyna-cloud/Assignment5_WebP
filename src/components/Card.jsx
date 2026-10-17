import React from 'react';

// Card component acts as a wrapper using children prop
export default function Card({ children }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
}
