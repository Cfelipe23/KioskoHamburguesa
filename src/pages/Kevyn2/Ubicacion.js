import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Ubicacion.css";

// Corrección de iconos de Leaflet para Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

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

          {}
          <div className="mapa-ubicacion">
            <MapContainer center={[2.444814, -76.614739]} zoom={17} style={{ height: "300px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[2.444814, -76.614739]}>
                <Popup>
                  Estamos aquí: Cra. 23 #6a-38, Popayán.
                </Popup>
              </Marker>
            </MapContainer>
          </div>

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
            <li>Sábado - Domingo de 4:00 pm a 2:00 am</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
