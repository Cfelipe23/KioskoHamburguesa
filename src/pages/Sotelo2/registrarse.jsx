import React, { useState } from "react";
import "../../css/login.css"; // Asegúrate de que esta ruta sea correcta
import { Link, useNavigate } from "react-router-dom";


const Registrarse = () => {
    const [form, setForm] = useState({
      nombre: "",
      apellido: "",
      usuario: "",
      clave: "",
    });
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate(); // ← define navigate correctamente

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const response = await fetch("http://localhost/KioskoHamburguesa/api/registrarse.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              nombre:form.nombre,
              apellido:form.apellido,
              usuario:form.usuario,
              clave:form.clave,
            }),
          });
      
          const data = await response.json();
      
          if (data.success) {
            alert("✅ " + data.message);
            navigate("/login");
          } else {
            setMensaje(data.message);
          }
        } catch (error) {
          console.error("Error:", error);
          setMensaje("Error en la conexión al servidor");
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
  
            <h2>Registrarse</h2>
  
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Escribe tu nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
  
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Escribe tu apellido"
                value={form.apellido}
                onChange={handleChange}
                required
              />
  
              <label htmlFor="usuario">Nombre de usuario</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Ej: usuario123"
                value={form.usuario}
                onChange={handleChange}
                required
              />
  
              <label htmlFor="clave">Contraseña</label>
              <input
                type="password"
                id="clave"
                name="clave"
                placeholder="Escribe tu contraseña"
                value={form.clave}
                onChange={handleChange}
                required
              />
  
              <button type="submit" className="login-submit">
                Crear cuenta
              </button>
            </form>
  
            {mensaje && <p className="mensaje">{mensaje}</p>}
  
            <div className="login-links">
                <Link to="/login">¿Ya tienes cuenta? Inicia sesión</Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Registrarse;