import { useState } from 'react'
import './App.css'
import freeCodeCampLogo from './assets/freecodecamp-logo.png';
import Boton from './componentes/boton';
import './hojas-de-estilos/boton.css'

function App() {
  const manejarClic = () => {
    console.log("clic");
  }
  const reinciciarContador =() =>{
    console.log('reiniciar')
  }
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
            manejarClic={manejarClic}
          />
          <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reinciciarContador}/>
         </div>
      </div>
    </>
  )
}

export default App
