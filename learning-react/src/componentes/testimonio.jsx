import React from 'react';
import '../hojas-stilos/Testimonio.css';
function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img src={require(`../assets/testimonio-${props.imagen}.png`)} alt="" className="imagen-testimonio" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre} de {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="detalles-testimonio">"{props.detalles}"</p>
      </div>
    </div>
  );
}


export default Testimonio;