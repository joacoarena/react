import React from "react";
import '../hojas-de-estilos/contador.css'

function Contador({numsClics}){
    return(
        <div className="contador">
            {numsClics}
        </div>
    )
}

export default Contador