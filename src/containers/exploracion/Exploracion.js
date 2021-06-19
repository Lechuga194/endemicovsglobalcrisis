import React, {useState} from 'react';
import Menu_busqueda from '../menu_busqueda/Menu_busqueda'
import Detalles_creador from '../detalles_creador/Detalles_creador'
import exploracion_img from '../../static/exploracion.jpg'
import styles from './exploracion.module.css'


function Exploracion({goHome}) {

    const [creador, setCreador] = useState({
        id: 1,
        rol: 'Artista',
        nombre: 'Isaac',
        obras: 3,
        pais: 'Mexicano'

    }); //TODO POR DEFECTO NULL
    const [currentPage, setCurrentPage] = useState('exploracion') //TODO por defecto debe ser exploracion
    const goBack = () => setCurrentPage('exploracion') //Perdon por la forma tan warra de hacer routes, no tengo tiempo de aprender react router
    
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
                <div id={styles.menuexploracion}><Menu_busqueda onCreadorClick={onCreadorClick} isSideMenu={false}/></div>
                <div className={styles.contenido}>
                    <img src={exploracion_img} alt="exploracion_img"></img>
                    <div className={styles.button}><nav onClick={onExploreClick}><ul><li>Iniciar<span></span></li></ul></nav></div>
                </div>
            </div> : 
            <Detalles_creador goHome={goHome} goBack={goBack} creador={creador}/>}
            {/* TODO RECORRIDO NORMAL Y RECORRIDO POR SALAS */}
        </>
    );
}

export default Exploracion;