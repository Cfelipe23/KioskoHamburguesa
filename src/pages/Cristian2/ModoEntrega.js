import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProcesoPedido.css';

const metodosDisponibles = [ 'Efectivo', 'Transferencia', 'Tarjeta en local', 'Nequi', 'Daviplata' ];

const ProcesoPedido = () => {
  const [ paso, setPaso ] = useState( 1 );
  const [ metodoPago, setMetodoPago ] = useState( '' );
  const [ preferido, setPreferido ] = useState( false );
  const [ modoEntrega, setModoEntrega ] = useState( '' );
  const [ direccion, setDireccion ] = useState( '' );
  const [ confirmado, setConfirmado ] = useState( false );
  const navigate = useNavigate();

  useEffect( () => {
    const guardado = localStorage.getItem( 'metodoPagoPreferido' );
    if ( guardado ) {
      setMetodoPago( guardado );
      setPreferido( true );
    }
  }, [] );

  const avanzarPaso = () => setPaso( ( prev ) => prev + 1 );

  const confirmarPago = () => {
    if ( !metodoPago ) return alert( 'Selecciona un método de pago.' );
    if ( preferido ) localStorage.setItem( 'metodoPagoPreferido', metodoPago );
    avanzarPaso();
  };

  const confirmarEntrega = () => {
    if ( modoEntrega === 'domicilio' && direccion.trim() === '' ) {
      return alert( 'Por favor, ingresa tu dirección.' );
    }
    avanzarPaso();
  };

  const confirmarPedido = () => {
    if ( confirmado ) return alert( 'Este pedido ya ha sido confirmado.' );
    setConfirmado( true );
    alert( 'Pedido confirmado. Tiempo estimado: 30-40 minutos.' );
    navigate( '/' );
  };

  return (
    <div className="proceso-pedido">
      <div className="proceso-pedido__barra-progreso">
        <div className={ `proceso-pedido__paso ${ paso >= 1 ? 'proceso-pedido__paso--activo' : '' }` }>1. Pago</div>
        <div className={ `proceso-pedido__paso ${ paso >= 2 ? 'proceso-pedido__paso--activo' : '' }` }>2. Entrega</div>
        <div className={ `proceso-pedido__paso ${ paso >= 3 ? 'proceso-pedido__paso--activo' : '' }` }>3. Confirmación</div>
      </div>

      { paso === 1 && (
        <div className="proceso-pedido__seccion">
          <h2>Elige tu forma de pago</h2>
          { metodosDisponibles.map( ( metodo ) => (
            <label key={ metodo } className="proceso-pedido__label">
              <input
                type="radio"
                className="proceso-pedido__input-radio"
                name="pago"
                value={ metodo }
                checked={ metodoPago === metodo }
                onChange={ () => setMetodoPago( metodo ) }
              />
              { metodo }
            </label>
          ) ) }

          <div>
            <label className="proceso-pedido__label">
              <input
                type="checkbox"
                className="proceso-pedido__input-checkbox"
                checked={ preferido }
                onChange={ () => setPreferido( !preferido ) }
              />
              Guardar como método de pago preferido
            </label>
          </div>

          <button className="proceso-pedido__boton" onClick={ confirmarPago }>
            Confirmar Pago
          </button>
        </div>
      ) }

      { paso === 2 && (
        <div className="proceso-pedido__seccion">
          <h2>¿Cómo deseas recibir tu pedido?</h2>

          <label className="proceso-pedido__label">
            <input
              type="radio"
              className="proceso-pedido__input-radio"
              name="modo"
              value="domicilio"
              checked={ modoEntrega === 'domicilio' }
              onChange={ () => setModoEntrega( 'domicilio' ) }
            />
            Domicilio
          </label>

          <label className="proceso-pedido__label">
            <input
              type="radio"
              className="proceso-pedido__input-radio"
              name="modo"
              value="recoger"
              checked={ modoEntrega === 'recoger' }
              onChange={ () => setModoEntrega( 'recoger' ) }
            />
            Recoger en el local
          </label>

          { modoEntrega === 'domicilio' && (
            <div>
              <label className="proceso-pedido__label">Dirección:</label>
              <input
                type="text"
                className="proceso-pedido__input-text"
                value={ direccion }
                onChange={ ( e ) => setDireccion( e.target.value ) }
                placeholder="Ingresa tu dirección"
              />
            </div>
          ) }

          { modoEntrega === 'recoger' && (
            <p>Tiempo estimado: 15-20 minutos</p>
          ) }

          <button className="proceso-pedido__boton" onClick={ confirmarEntrega }>
            Continuar
          </button>
        </div>
      ) }

      { paso === 3 && (
        <div className="proceso-pedido__seccion proceso-pedido__confirmacion">
          <h2>Confirmar Pedido</h2>
          <p>Forma de pago: { metodoPago }</p>
          <p>Modo de entrega: { modoEntrega }</p>
          { modoEntrega === 'domicilio' && <p>Dirección: { direccion }</p> }
          <button className="proceso-pedido__boton" onClick={ confirmarPedido }>
            Confirmar Pedido
          </button>
        </div>
      ) }
    </div>
  );
};

export default ProcesoPedido;
