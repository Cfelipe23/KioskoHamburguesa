import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home.js';
import Menu from './pages/Cristian1/Menu.js';
import ModoEntrega from './pages/Cristian2/ModoEntrega.js';


import Reservas from './pages/Sotelo1/Reservas.js';
import Login from './pages/Sotelo2/Login.js';

import Noticias from './pages/Kevyn1/Noticias.js';
import Ofertas from './pages/Kevyn1/Ofertas.js';
import Eventos from './pages/Kevyn1/Eventos.js';
import Ubicacion from './pages/Kevyn2/Ubicacion.js';



import './index.css';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/Menu" element={ <Menu /> } />
            <Route path="/ModoEntrega" element={ <ModoEntrega /> } />
            <Route path="/Reservas" element={ <Reservas /> } />
            <Route path="/Login" element={ <Login /> } />
            <Route path="/Noticias" element={ <Noticias /> } />
            <Route path="/Eventos" element={ <Eventos /> } />
            <Route path="/Ofertas" element={ <Ofertas /> } />
            <Route path="/Ubicacion" element={ <Ubicacion /> } />
          </Routes>
        </main>
        <Footer />
      </div>


    </Router>

  );
};

export default App;
