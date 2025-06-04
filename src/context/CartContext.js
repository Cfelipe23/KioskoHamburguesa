import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ( { children } ) => {
  const [ cartItems, setCartItems ] = useState( [] );

  const addToCart = ( plato ) => {
    setCartItems( ( prevItems ) => {
      const existing = prevItems.find( item => item.id === plato.id );
      if ( existing ) {
        return prevItems.map( item =>
          item.id === plato.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [ ...prevItems, { ...plato, cantidad: 1 } ];
      }
    } );
  };

  const removeFromCart = ( platoId ) => {
    setCartItems( ( prevItems ) =>
      prevItems
        .map( item =>
          item.id === platoId ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter( item => item.cantidad > 0 )
    );
  };

  const increaseQuantity = ( platoId ) => {
    setCartItems( ( prevItems ) =>
      prevItems.map( item =>
        item.id === platoId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider value={ { cartItems, addToCart, removeFromCart, increaseQuantity } }>
      { children }
    </CartContext.Provider>
  );
};
