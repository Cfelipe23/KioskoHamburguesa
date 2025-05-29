import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUsuario } from './Autorizacion';
import "../../css/login.css"; // Asegúrate de que esta ruta sea correcta

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost/KioskoHamburguesa/api/login.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ usuario:usuario, clave:clave }),
        });
      

      const data = await response.json();
      console.log(data);

      if (data.success) {
        // Login exitoso, puedes guardar info y redirigir
        setMensaje("");
        // Por ejemplo guardamos el nombre en sessionStorage o context
        sessionStorage.setItem("nombre", data.nombre);
        // Redirigir a perfil (usa react-router-dom)
        loginUsuario();
        navigate("/Menu");
      } else {
        // Mostrar error del backend
        setMensaje(data.message);
      }
    } catch (error) {
      setMensaje("Error en la conexión al servidor");
      console.error(error);
    }
  };

  return (
    <>
      <div className="login-pages">
        <div className="login-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
            alt="icono usuario"
            className="login-icon"
          />

          <h2>Iniciar Sesión</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario/Correo"
              required
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <label htmlFor="clave">Clave</label>
            <input
              type="password"
              id="clave"
              name="clave"
              placeholder="Contraseña"
              required
              value={clave}
              onChange={(e) => setClave(e.target.value)}
            />

            <button type="submit" className="login-submit">
              Entrar
            </button>
          </form>

          {mensaje && <p className="mensaje">{mensaje}</p>}

          <div className="login-links">
            <br />
            <a href="/registrarse">Nuevo usuario</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;