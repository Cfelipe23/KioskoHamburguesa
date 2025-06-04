
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { estaLogueado, logoutUsuario } from '../pages/Sotelo2/Autorizacion';
import '../css/NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUsuario();
    navigate('/'); // Te regresa al inicio
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://images.icon-icons.com/677/PNG/512/hamburger_icon-icons.com_60832.png"
          width="7%"
          alt="Logo"
        />
        <span className="brand-name">
          food<span className="highlight">wa</span>gon
        </span>
      </div>

      <div className="menu-icons">
        <Link to="/">Inicio</Link>
        <Link to="/Menu">Menu</Link>

        {/* Solo mostrar Reservas si está logueado */}
        {estaLogueado() && <Link to="/Reservas">Reservas</Link>}

        <Link to="/Noticias">Noticias</Link>
        <Link to="/Ubicacion">Ubicacion - Horario</Link>

        <button className="cart-icon">🛒</button>

        {/* Botón de login o logout */}
        {estaLogueado() ? (
          <button onClick={handleLogout} className="login-button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992680.png"
              alt="Cerrar sesión"
              width="25"
              title="Cerrar sesión"
            />
          </button>
        ) : (
          <button onClick={handleLogin} className="login-button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Login"
              width="25"
              title="Iniciar sesión"
            />
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;