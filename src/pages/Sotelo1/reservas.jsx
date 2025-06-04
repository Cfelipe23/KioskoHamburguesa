import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/login.css"; // Asegúrate de que esta ruta sea correcta

const Reservar = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [personas, setPersonas] = useState(1);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState("");

  const horarioAtencion = {
    desde: 12,
    hasta: 22,
  };

  const hoy = new Date().toISOString().split("T")[0];

  const obtenerHorasDisponibles = () => {
    const horas = [];
    for (let i = horarioAtencion.desde; i <= horarioAtencion.hasta; i++) {
      const horaStr = i.toString().padStart(2, "0") + ":00";
      horas.push(horaStr);
    }
    return horas;
  };

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validarTelefono = (tel) => /^\d{10}$/.test(tel);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !telefono || !correo || !fecha || !hora) {
      setError("❌ Todos los campos son obligatorios.");
      return;
    }

    if (!validarTelefono(telefono)) {
      setError("❌ El teléfono debe tener 10 dígitos numéricos.");
      return;
    }

    if (!validarEmail(correo)) {
      setError("❌ Ingresa un correo electrónico válido.");
      return;
    }

    if (personas < 1 || personas > 10) {
      setError("❌ El número de personas debe estar entre 1 y 10.");
      return;
    }

    setError("");
    alert(`✅ Reserva hecha para el ${fecha} a las ${hora}, para ${personas} persona(s).`);
    // Aquí puedes enviar los datos a tu backend
  };

  return (
    <div>
      <div className="login-pages">
        <div className="login-container">
          <h2>Reservar Mesa</h2>
          <form onSubmit={handleSubmit} className="formulario-reserva">
            <label>Nombre completo:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

            <label>Teléfono:</label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />

            <label>Correo electrónico:</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />

            <label>Fecha:</label>
            <input
              type="date"
              min={hoy}
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />

            <label>Hora:</label>
            <select value={hora} onChange={(e) => setHora(e.target.value)} required>
              <option value="">Selecciona una hora</option>
              {obtenerHorasDisponibles().map((h, i) => (
                <option key={i} value={h}>{h}</option>
              ))}
            </select>

            <label>Número de personas:</label>
            <input
              type="number"
              min="1"
              max="10"
              value={personas}
              onChange={(e) => setPersonas(parseInt(e.target.value))}
              required
            />

            {error && <p className="error">{error}</p>}

            <button type="submit" className="btn-reservar">Reservar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservar;