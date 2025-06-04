import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../css/CartSummary.css';
import { Link } from 'react-router-dom';

const CartSummary = ( { onClose } ) => {
  const { cartItems, increaseQuantity, removeFromCart } = useContext( CartContext );

  const subtotal = cartItems.reduce(
    ( total, item ) => total + item.precio * item.cantidad,
    0
  );
  const impuestos = subtotal * 0.19;
  const total = subtotal + impuestos;

  return (
    <div className="cart-summary">
      <button className="close-btn" onClick={ onClose }>✖</button>
      <h3>Resumen del Pedido</h3>
      <ul>
        { cartItems.map( ( item ) => (
          <li key={ item.id } className="cart-item">
            <span>{ item.nombre }</span>
            <div className="cantidad-controls">
              <button onClick={ () => removeFromCart( item.id ) }>-</button>
              <span>{ item.cantidad }</span>
              <button onClick={ () => increaseQuantity( item.id ) }>+</button>
            </div>
            <span>${ ( item.precio * item.cantidad ).toFixed( 2 ) }</span>
          </li>
        ) ) }
      </ul>
      <hr />
      <p>Subtotal: ${ subtotal.toFixed( 2 ) }</p>
      <p>Impuestos (19%): ${ impuestos.toFixed( 2 ) }</p>
      <h4>Total: ${ total.toFixed( 2 ) }</h4>
      <Link to="/ModoEntrega">
        <button className="pagar-btn">Pagar</button>
      </Link>
    </div>
  );
};

export default CartSummary;
