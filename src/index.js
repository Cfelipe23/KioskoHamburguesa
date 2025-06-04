// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'leaflet/dist/leaflet.css';
import App from './App';


import { CartProvider } from './context/CartContext.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />

    </CartProvider>
  </React.StrictMode>
);
