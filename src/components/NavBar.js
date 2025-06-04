import React, { useContext, useState, useEffect, useRef } from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.js';
import CartSummary from './CartSummary';

const NavBar = () => {
  const { cartItems } = useContext( CartContext );
  const totalItems = cartItems?.reduce( ( sum, item ) => sum + item.cantidad, 0 ) || 0;
  const [ showSummary, setShowSummary ] = useState( false );
  const summaryRef = useRef();

  // Cierre automático al hacer clic fuera del resumen
  useEffect( () => {
    const handleClickOutside = ( e ) => {
      if ( summaryRef.current && !summaryRef.current.contains( e.target ) ) {
        setShowSummary( false );
      }
    };

    if ( showSummary ) {
      document.addEventListener( 'mousedown', handleClickOutside );
    } else {
      document.removeEventListener( 'mousedown', handleClickOutside );
    }

    return () => {
      document.removeEventListener( 'mousedown', handleClickOutside );
    };
  }, [ showSummary ] );

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://images.icon-icons.com/677/PNG/512/hamburger_icon-icons.com_60832.png"
            width="40"
            alt="Logo"
          />
          <span className="brand-name">
            food<span className="highlight">wa</span>gon
          </span>
        </div>

        <div className="menu-icons">
          <Link to="/">Inicio</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/Reservas">Reservas</Link>
          <Link to="/Noticias">Noticias</Link>
          <Link to="/Ubicacion">Ubicacion - Horario</Link>

          <div style={ { position: 'relative' } }>
            <button
              className="cart-icon"
              onClick={ () => setShowSummary( !showSummary ) }
            >
              🛒
              { totalItems > 0 && <span className="cart-count">{ totalItems }</span> }
            </button>
          </div>

          <Link className="login-button" to="/Login">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Login"
            />
          </Link>
        </div>
      </nav>

      { showSummary && (
        <div ref={ summaryRef }>
          <CartSummary onClose={ () => setShowSummary( false ) } />
        </div>
      ) }
    </>
  );
};

export default NavBar;
