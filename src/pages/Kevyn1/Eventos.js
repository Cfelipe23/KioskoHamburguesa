import React, { useState } from 'react';
import './Eventos.css';
import { eventos } from './eventosData';




const diasDelMes = Array.from({ length: 30 }, (_, i) => i + 1);

const Eventos = () => {
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);


  const handleClick = (dia) => {
    setDiaSeleccionado(dia === diaSeleccionado ? null : dia);
  };

  return (
    <div className="calendario-container">
      <h2>EVENTOS JUNIO 2025</h2>
      <div className="calendario">
        {diasDelMes.map((dia) => {
          const fecha = `2025-06-${dia.toString().padStart(2, '0')}`;
          const tieneEvento = eventos[fecha];

          return (
            <div
              key={dia}
              className={`dia ${tieneEvento ? 'con-evento' : ''}`}
              onClick={() => tieneEvento && handleClick(dia)}
            >
              {dia}
              {diaSeleccionado === dia && (
                <div className="detalle">
                  <h4>{eventos[fecha].titulo}</h4>
                  <p>{eventos[fecha].descripcion}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Eventos;
