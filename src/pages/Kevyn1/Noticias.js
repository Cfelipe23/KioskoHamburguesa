import React from 'react';
import { Tag, Calendar } from 'lucide-react';
import './Noticias.css';
import { Link } from 'react-router-dom';

const Noticia = () => {
  return (
<div className="noticia-container">
      <h1 className="noticia-title">NOTICIAS</h1>
      <p className="noticia-subtitle">¡Descubre nuestros diferentes ofertas y eventos!</p>

      <div className="noticia-options">
        <Link to="/ofertas" className="noticia-card">
          <Tag className="noticia-icon oferta" size={32} />
          <span className="noticia-text">Ofertas</span>
        </Link>

        <Link to="/eventos" className="noticia-card">
          <Calendar className="noticia-icon evento" size={32} />
          <span className="noticia-text">Eventos</span>
        </Link>
      </div>
    </div>
  );
};



export default Noticia;
