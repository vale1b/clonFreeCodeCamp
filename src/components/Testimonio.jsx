import React from 'react';//Importando la libreria 'React' del paquete 'react'.
import '../css/Testimonio.css';  //Importando la hoja de estilo del componente creado.

//Creando componente llamado 'Testimonio'.
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../images/testimonio-${props.imagen}.png`)}
        alt='Foto de Emma.'
        />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en <strong>{props.pais}</strong>
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div> 
    </div>
  );    
}

//Exportando dicho componente creado.
export default Testimonio;