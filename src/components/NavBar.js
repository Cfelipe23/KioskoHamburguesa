import React from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src="https://images.icon-icons.com/677/PNG/512/hamburger_icon-icons.com_60832.png" width="7%" alt="Logo" />
        <span className="brand-name">food<span className="highlight">wa</span>gon</span>
      </div>
      <div className="menu-icons">
        <Link to="/">Inicio</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Reservas">Reservas</Link>
        <Link to="/Noticias">Noticias</Link>
        <Link to="/Ubicacion">Ubicacion - Horario</Link>

        <button class="cart-icon">🛒</button>
        <Link className="login-button" to="/Login">
          <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Login" />
        </Link>

      </div>
    </nav >
  );
};

export default NavBar;
