// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'leaflet/dist/leaflet.css';
import App from './App';

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root'));
=======

import { CartProvider } from './context/CartContext.js';



const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
>>>>>>> 91ed68284ef547ece9d1598dcd2c00484ab68317
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />

    </CartProvider>
  </React.StrictMode>
);
