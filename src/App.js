import './App.css';
import freecodecamp_logo from './images/freecodecamp_logo.png'
import Boton from './components/Boton.js';
import Counter from './components/Counter.js';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClic = () => {  
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={ freecodecamp_logo }
          alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Counter 
          numClicks={numClicks} />
        <div className='alinear-contenido'>
          <Boton 
            texto='Clic'
            botonTypeClic={true}
            manejarClic={ manejarClic } />
          <Boton 
            texto='Reiniciar'
            botonTypeClic={false}
            manejarClic={ reiniciarContador }  />
        </div>
      </div>
    </div>
  );
}

export default App;
