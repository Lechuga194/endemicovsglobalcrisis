import React, {useState} from 'react';
import Menu_busqueda from '../menu_busqueda/Menu_busqueda'
import Detalles_creador from '../detalles_creador/Detalles_creador'
import styles from './exploracion.module.css'
import exploracion_img from '../../static/exploracion.jpg'


function Exploracion() {

    const [creador, setCreador] = useState(null);
    const [currentPage, setCurrentPage] = useState('exploracion') //TODO por defecto debe ser exploracion
    
    const onCreadorClick = (creadorSeleccionado) => {
        if(creadorSeleccionado != null){
            console.log(creadorSeleccionado)
            setCreador(creadorSeleccionado);
            setCurrentPage('detalles_creador');
        }
    };

    const onExploreClick = () => {
        //TODO ESTO DEBERIA LLEVARME AL RECORRIDO COMPLETO
    }

    return(
        <>
            {currentPage === 'exploracion' ? 
            <div className={styles.exploracion}>
                <div id={styles.menuexploracion}><Menu_busqueda onCreadorClick={onCreadorClick}/></div>
                <div className={styles.contenido}>
                    <img src={exploracion_img} alt="exploracion_img"></img>
                    <div className={styles.button}><nav onClick={onExploreClick}><ul><li>Iniciar<span></span></li></ul></nav></div>
                </div>
            </div> : 
            <Detalles_creador creador={creador}/>}
            {/* RECORRIDO NORMAL Y RECORRIDO POR SALAS */}
        </>
    );
}

export default Exploracion;