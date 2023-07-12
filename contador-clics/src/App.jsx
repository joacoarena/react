import { useState } from 'react'
import './App.css'
import freeCodeCampLogo from './assets/freecodecamp-logo.png';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
function App() {
  const [numsClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numsClics + 1)

}
  const reinciciarContador =() =>{
  setNumClics(0)
  }
  return (
    <>
      <div className='App'>
         <div className='freecodecamp-logo-contenedor'>
          <img src={freeCodeCampLogo} alt="Logo" className='freecodecamp-logo' />
         </div>
         <div className='contenedor-principal'>
          <Contador numsClics={numsClics}/>
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
