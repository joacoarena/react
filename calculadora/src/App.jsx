import { useState } from 'react'
import Boton from './componentes/botones'
import './App.css'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/boton-clear'
function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val)
  }
  return (
    <>
      <div className='App'>
        
        <div className='contenedor-calculadora'>
          <Pantalla
            input={input}
          />
          <div className='fila'>
            <Boton  manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}> 3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>  
          <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
          <Boton manejarClic={agregarInput}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>
              Clear
            </BotonClear>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
