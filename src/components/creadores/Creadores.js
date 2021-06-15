import React from 'react';

function Creadores({listaCreadores}) {

    const artistas = listaCreadores.filter(creador => creador.rol == 'Artista');
    const investigadores = listaCreadores.filter(creador => creador.rol == 'Investigador');
    const curadores = listaCreadores.filter(creador => creador.rol == 'Curador');

    return(
        <div className="creadores">
            <div>
                <h3>Artistas</h3>
                {artistas.map(i => creador(i))}
            </div>
            <div>
                <h3>investigadores</h3>
                {investigadores.map(i => creador(i))}
            </div>
            <div>
                <h3>curadores</h3>
                {curadores.map(i => creador(i))}
            </div>
        </div>
    );
}

function creador(creador){
    return (
        <div key={creador.id} className="creador">
            {creador.nombre}
            {creador.obras}
        </div>
    );
}

export default Creadores;