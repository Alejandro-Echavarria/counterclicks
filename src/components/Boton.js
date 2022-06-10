import React from 'react';
import '../stylesheet/Boton.css';

function Boton ({ texto, botonTypeClic, manejarClic }) {
	return(
		<button 
			className={ botonTypeClic ? 'boton-clic' : 'boton-reiniciar' } 
			onClick={ manejarClic } >
				{ texto }
		</button>
	);
}

export default Boton;