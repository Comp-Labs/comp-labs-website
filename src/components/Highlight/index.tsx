import React from 'react';

export default function Highlight({ children, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '5px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}