import { useState } from 'react'
import './App.css'
import freeCodeCampLogo from './assets/freecodecamp-logo.png';
import Boton from './componentes/boton';

function App() {

  return (
    <>
      <div className='App'>
         <div className='freecodecamp-logo-contenedor'>
          <img src={freeCodeCampLogo} alt="Logo" className='freecodecamp-logo' />
         </div>
         <div className='contenedor-principal'>
          <Boton 
            texto='click'
            esBotonDeClic={true}
            manejarClic={}
          />
          <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={}/>
         </div>
      </div>
    </>
  )
}

export default App
