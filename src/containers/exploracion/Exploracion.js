import React, {useState, useEffect} from 'react';
import Iniciar_Recorrido from '../../components/iniciar_recorrido/Iniciar_Recorrido'
import Menu_busqueda from '../menu_busqueda/Menu_busqueda'
import Navbar from '../../components/navbar/Navbar'
import Imagen from '../imagen/Imagen'
import { useSpring, animated, config } from 'react-spring'
import './exploracion.css'

const texto = "Proident aliquip nulla aute cillum et deserunt veniam. Dolore irure elit adipisicing amet nulla ut deserunt cillum. Tempor proident irure consequat excepteur eu consectetur do cillum. Lorem voluptate adipisicing veniam id eu. Culpa incididunt excepteur aliqua consequat labore pariatur culpa do id. Incididunt id exercitation elit dolor velit aliqua magna sunt excepteur do irure velit officia dolor. Incididunt consequat magna tempor sunt veniam nisi occaecat laborum ut nisi pariatur. Reprehenderit cillum incididunt elit voluptate. Consectetur reprehenderit velit pariatur veniam magna culpa. Irure occaecat non tempor et cupidatat commodo duis nulla magna nostrud sunt ea in. Culpa sunt do culpa do minim sit pariatur.";

function Exploracion() {

    const [creador, setCreador] = useState(null);
    const [currentPage, setCurrentPage] = useState('') //TODO por defecto debe ser exploracion
    const onCreadorClick = (creador) => {
        if(creador != null) setCreador(creador);
        setCurrentPage('detalles_creador');
    };
    const redirect = () => {
        setCurrentPage('exploracion')
    }

    const springwidth = useSpring({
        from:{width: "0%"},
        to:{width: "100%"},
        config:config.slow
    })

    return(
        <>
            {currentPage === 'exploracion' ? 
            <animated.div style={springwidth} className="exploracion">
                <Menu_busqueda onCreadorClick={onCreadorClick}/>
                <div id='vr'></div>
                <Iniciar_Recorrido />
            </animated.div> : 
            <div class="container-detalles-creador">
                <Navbar redirect={redirect}/>
                <div class="detalles-creador">
                    <div class="datos">
                        <h1>Nombre</h1>
                        <h3>Nacionalidad</h3>
                        <p>{texto}</p>
                    </div>
                    <div class="galeria">
                        <Imagen source="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"></Imagen>
                        <Imagen source="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=383&q=80"></Imagen>
                        <Imagen source="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"></Imagen>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Exploracion;