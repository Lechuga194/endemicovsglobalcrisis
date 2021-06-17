import React from 'react';

import './iniciar_recorrido.css'
import exploracion_img from '../../static/exploracion.jpg'

function Iniciar_Recorrido() {
    return(
        <div className="contenido">
            <img src={exploracion_img} alt="exploracion_img"></img>
            <h1>Iniciar Recorrido Completo</h1>
        </div>
    );
}

export default Iniciar_Recorrido;