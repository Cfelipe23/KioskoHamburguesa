
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home.js';
import Menu from './pages/Cristian1/Menu.js';
import ModoEntrega from './pages/Cristian2/ModoEntrega.js';



import Noticias from './pages/Kevyn1/Noticias';
import Ofertas from './pages/Kevyn1/Ofertas';
import Detalle from './pages/Kevyn1/Detalle';
import Eventos from './pages/Kevyn1/Eventos';
import Ubicacion from './pages/Kevyn2/Ubicacion';

import './index.css';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <NavBar />
        <main className="main-content">
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Registrarse />} />

          {/* Rutas protegidas */}
          <Route path="/Menu" element={<RutaPrivada><Menu /></RutaPrivada>} />
          <Route path="/ModoEntrega" element={<RutaPrivada><ModoEntrega /></RutaPrivada>} />
          <Route path="/reservas" element={<RutaPrivada><Reservas /></RutaPrivada>} />
          <Route path="/Noticias" element={<RutaPrivada><Noticias /></RutaPrivada>} />
          <Route path="/Ubicacion" element={<RutaPrivada><Ubicacion /></RutaPrivada>} />
        </Routes>
        </main>
        <Footer />
      </div>


    </Router>

  );
};

export default App;
