
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Menu from './pages/Cristian1/Menu';
import ModoEntrega from './pages/Cristian2/ModoEntrega';

import Reservas from './pages/Sotelo1/Reservas';
import Login from './pages/Sotelo2/Login';

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
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/ModoEntrega" element={<ModoEntrega />} />
            <Route path="/Reservas" element={<Reservas />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Noticias" element={<Noticias />} />
            <Route path="/Eventos" element={<Eventos />} />
            <Route path="/Ofertas" element={<Ofertas />} />
            <Route path="/detalle/:id" element={<Detalle />} />
            <Route path="/Ubicacion" element={<Ubicacion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
