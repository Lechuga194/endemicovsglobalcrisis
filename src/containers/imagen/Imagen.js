import React, {useState, useEffect} from 'react';
import './imagen.css'


function Imagen({source}) {
    return(
            <img id="imagen" src={source}></img>
    );
}

export default Imagen;
