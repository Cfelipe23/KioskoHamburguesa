import React from 'react';
import { useParams } from 'react-router-dom';
import './Detalle.css';

const promociones = {
  1: {
    titulo: '¡Aprovecha el 2x1 en Hamburguesas!',
    descripcion: 'Disfruta de nuestra promoción 2x1 con hamburguesas elaboradas con pan artesanal suave y fresco, carne 100% de res seleccionada y jugosa, acompañada de queso cheddar derretido, lechuga crujiente, tomate maduro, pepinillos frescos y nuestra salsa especial secreta.',
    imagen: require('./Imagenes/2X1 Hamburguesa.png'),
  },
  2: {
    titulo: '¡25% de descuento en Hamburguesa Sencilla todos los jueves!',
    descripcion: 'Disfruta de nuestra hamburguesa sencilla preparada con pan artesanal, carne 100% de res jugosa, queso cheddar, lechuga fresca, tomate y nuestra salsa especial. Todos los jueves aprovecha un 25% de descuento en esta deliciosa hamburguesa, perfecta para un almuerzo rápido y sabroso.',
    imagen: require('./Imagenes/Promocion Hamburguesa.png'),
  },
  3: {
    titulo: '¡Perros Calientes a Solo $5.000 Todos los Martes!',
    descripcion: 'Todos los martes, disfruta de nuestro delicioso perro caliente por solo $5.000. Elaborado con un pan suave tipo brioche ligeramente tostado, una salchicha tipo americana 100% de carne, cebolla caramelizada, papas fosforito crocantes, queso rallado y salsas caseras: mayonesa, kétchup y mostaza al gusto.',
    imagen: require('./Imagenes/Promocion Perro Caliente.png'),
  },
};

const Detalle = () => {
  const { id } = useParams();
  const promo = promociones[id];

  if (!promo) return <p style={{ padding: '40px', textAlign: 'center' }}>Promoción no encontrada</p>;

  return (
    <div className="detalle-container">
      <img src={promo.imagen} alt={promo.titulo} className="detalle-img" />
      <div className="detalle-info">
        <h1>{promo.titulo}</h1>
        <p>{promo.descripcion}</p>
      </div>
    </div>
  );
};

export default Detalle;

