import './App.css';
import Boton from './components/Boton.js';
import freecodecamp_logo from './images/freecodecamp_logo.png'

function App() {

  const manejarClic = () => {
    console.log('Click');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freecodecamp_logo}
          alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Boton 
          texto='Clic'
          botonTypeClic={true}
          manejarClic={manejarClic} 
        />
        <Boton 
          texto='Reiniciar'
          botonTypeClic={false}
          manejarClic={reiniciarContador} 
        />
      </div>
    </div>
  );
}

export default App;
