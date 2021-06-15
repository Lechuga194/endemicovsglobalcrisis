import React from 'react';
import './creadores.css'

function Creadores({listaCreadores}) {

    const artistas = listaCreadores.filter(creador => creador.rol == 'Artista');
    const investigadores = listaCreadores.filter(creador => creador.rol == 'Investigador');
    const curadores = listaCreadores.filter(creador => creador.rol == 'Curador');

    //TODO QUITAR artistas si no se necesita el grid x4
    return(
        <div className="creadores">
            <div>
                <h1>Artistas</h1>
                <div> 
                    <ul>
                        <li>{artistas.map(i => creador(i))}</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h1>investigadores</h1>
                    <ul>
                        <li>{investigadores.map(i => creador(i))}</li>
                    </ul>
                </div>
                <div>
                    <h1>curadores</h1>
                    <ul>
                        <li>{curadores.map(i => creador(i))}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function creador(creador){
    return (
        <p id="nombre">{creador.nombre} {creador.obras}</p>
    );
}

export default Creadores;