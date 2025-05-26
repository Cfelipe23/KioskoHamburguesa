import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h3>Compañía</h3>
          <p>Sobre Nosotros</p>
          <p>123456789</p>
          <p>correo@ejemplo.com</p>
        </div>
        <div className="contact-info">
          <h3>Contáctanos</h3>
          <p>123456789</p>
          <p>correo@ejemplo.com</p>
        </div>
      </div>
      <div className="social-media">
        <p>¡Síguenos en nuestras redes!</p>
        <div className="icons">
          {/* Aquí puedes incluir íconos de redes sociales */ }
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
