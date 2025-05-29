import { Navigate } from 'react-router-dom';
import { estaLogueado } from './Autorizacion';

const RutaPrivada = ({ children }) => {
  return estaLogueado() ? children : <Navigate to="/login" />;
};

export default RutaPrivada;