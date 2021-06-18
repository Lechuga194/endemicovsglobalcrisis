import React, {useState, useEffect} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Image_container from '../image_container/Image_container'
import {texto, listofimages} from './utils'

function Detalles_creador({creador}){

    const redirect = () => {
        
    }

    return(
        <>
            <Navbar redirect={redirect}/>
            {creador.rol == 'Artista' ? 
                <div className="artistacontainer">
                    <div className="artistadetalles">
                        <div className="datos">
                            <h1>{creador.nombre}</h1>
                            <h3>{creador.nacionalidad}</h3>
                            <p>{texto}</p>
                        </div>
                        <Image_container images={listofimages}/>
                    </div>
                </div> :
                <h1>Investigador</h1>}
        </>
    );
}

export default Detalles_creador;

