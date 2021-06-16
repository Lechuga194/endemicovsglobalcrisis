import React from 'react';

import './exploracion.css'
import exploracion_img from '../../static/exploracion.jpg'

function Exploracion() {
    return(
        <div className="contenido">
            <img src={exploracion_img} alt="exploracion_img"></img>
            <h1>Iniciar Recorrido Completo</h1>
        </div>
    );
}

export default Exploracion;