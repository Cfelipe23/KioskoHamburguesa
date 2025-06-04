import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Ofertas.css';
import Promo1 from './Imagenes/2X1 Hamburguesa.png';
import Promo2 from './Imagenes/Promocion Hamburguesa.png';
import Promo3 from './Imagenes/Promocion Perro Caliente.png';

const Ofertas = () => {
  const navigate = useNavigate();

  const promociones = [
    { id: 1, imagen: Promo1, nombre: '2x1 Hamburguesa' },
    { id: 2, imagen: Promo2, nombre: 'Promoción Hamburguesa' },
    { id: 3, imagen: Promo3, nombre: 'Promoción Perro Caliente' },
  ];

  return (
    <div className="ofertas-container">
      <h1>OFERTAS</h1>
      <p>Ofertas solo validas para consumir en el local</p>

      <div className="ofertas-grid">
        {promociones.map(promo => (
          <div key={promo.id} className="oferta-item">
            <img
              src={promo.imagen}
              alt={promo.nombre}
              className="oferta-img"
              onClick={() => navigate(`/detalle/${promo.id}`)}
            />

          </div>
        ))}
      </div>
    </div>
  );
};

export default Ofertas;
