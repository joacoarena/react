import { useState } from 'react'
import Boton from './componentes/botones'
import './App.css'

function App() {

  return (
    <>
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img src="" alt="" className='freecodecamp-logo' />
        </div>
        <div className='contenedor-calculadora'>
          <div className='fila'>
            <Boton>1</Boton>
          </div>
          <div className='fila'></div>
          <div className='fila'></div>
          <div className='fila'></div>
          <div className='fila'></div>
        </div>
     </div>
    </>
  )
}

export default App
