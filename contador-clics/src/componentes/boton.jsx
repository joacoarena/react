import React from "react";
import '../hojas-de-estilos/boton.css'

function Boton ({texto, esBotonDeClic, manejarClic}) {
    return(
        <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reinciciar'} onClick={manejarClic}>
            {texto} 
        </button>
    )
}

export default Boton