import React from 'react';
import './Home.css';
import { FaMotorcycle, FaStore, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="search-section">
      <h1>¿Busca algo para comer?</h1>
      <p>¡Descubre comida cerca de ti en segundos y pide ya!</p>

      <div className="search-card">
        <div className="delivery-options">
          <button className="option active">
            <FaMotorcycle className="icon" />
            Domicilio
          </button>
          <button className="option">
            <FaStore className="icon" />
            Recoger
          </button>
        </div>

        <div className="search-input">
          <div className="input-icon">
            <FaMapMarkerAlt />
            <input type="text" placeholder="Ingresa tu dirección" />
          </div>
          <button className="search-button">
            <FaSearch /> Buscar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
