import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.js';
import CartSummary from './CartSummary';
import { estaLogueado, logoutUsuario } from '../pages/Sotelo2/Autorizacion';
import '../css/NavBar.css';

const NavBar = () => {
  const { cartItems } = useContext( CartContext );
  const totalItems = cartItems?.reduce( ( sum, item ) => sum + item.cantidad, 0 ) || 0;

  const [ showSummary, setShowSummary ] = useState( false );
  const summaryRef = useRef();
  const navigate = useNavigate();

  // Cierra resumen al hacer clic fuera
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

  // Acciones de login / logout
  const handleLogout = () => {
    logoutUsuario();
    navigate( '/' );
  };

  const handleLogin = () => {
    navigate( '/login' );
  };

  // Click en el carrito 🛒
  const handleCartClick = () => {
    if ( !estaLogueado() ) {
      navigate( '/login' );
    } else {
      setShowSummary( !showSummary );
    }
  };

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
          { estaLogueado() && <Link to="/Reservas">Reservas</Link> }
          <Link to="/Noticias">Noticias</Link>
          <Link to="/Ubicacion">Ubicacion - Horario</Link>

          {/* Carrito con control de login */ }
          <div style={ { position: 'relative' } }>
            <button className="cart-icon" onClick={ handleCartClick }>
              🛒
              { totalItems > 0 && <span className="cart-count">{ totalItems }</span> }
            </button>
          </div>

          {/* Botón Login / Logout */ }
          { estaLogueado() ? (
            <button onClick={ handleLogout } className="login-button">
              <img
                src="https://cdn-icons-png.flaticon.com/512/992/992680.png"
                alt="Cerrar sesión"
                width="25"
                title="Cerrar sesión"
              />
            </button>
          ) : (
            <button onClick={ handleLogin } className="login-button">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="Login"
                width="25"
                title="Iniciar sesión"
              />
            </button>
          ) }
        </div>
      </nav>

      {/* Mostrar resumen solo si está logueado */ }
      { showSummary && estaLogueado() && (
        <div ref={ summaryRef }>
          <CartSummary onClose={ () => setShowSummary( false ) } />
        </div>
      ) }
    </>
  );
};

export default NavBar;
