import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import miImagen from './Ubicacion.PNG';
import "./Ubicacion.css"; // Importa el CSS

const Ubicacion = () => {
  return (
    <div className="ubicacion-container">
      

      <div className="contenedor-principal">
        {/* Izquierda */}
        <div className="lado izquierdo">
          <div className="titulo-lado">
            <FaMapMarkerAlt className="icono-rojo" />
            <h3>Ubicación</h3>
          </div>

          <img
            src={miImagen}
            alt="Ubicación"
            className="imagen-ubicacion"
          />

          <p className="direccion1">Cra. 23 #6a-38, Popayán, Cauca</p>
           <p className="direccion2">A una cuadra del Parque Jose Maria Obando</p>
        </div>

        {/* Línea roja vertical */}
        <div className="linea-roja" />

        {/* Derecha */}
        <div className="lado derecho">
          <div className="titulo-lado">
            <FaClock className="icono-rojo" />
            <h3>Horarios de Atención</h3>
          </div>

          <ul className="lista-horarios">
            <li>Lunes: Sin servicio</li>
            <li>Martes - Viernes de 4:00 pm a 11:59 pm</li>
            <li>Sabado - Domingo de 4:00 pm a 2:00 am</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
