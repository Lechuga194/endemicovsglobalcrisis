import React, {useState} from 'react';
import Menu_busqueda from '../menu_busqueda/Menu_busqueda'
import Detalles_creador from '../detalles_creador/Detalles_creador'
import Recorrido from '../Recorrido/Recorrido'
import {salas} from '../utils'
import exploracion_img from '../../static/exploracion.jpg'
import styles from './exploracion.module.css'


function Exploracion({goHome}) {

    const [creador, setCreador] = useState(null);
    const [currentPage, setCurrentPage] = useState('exploracion')
    const [recorrido, setRecorrido] = useState(null)
    
    const goBack = () => setCurrentPage('exploracion') //Perdon por la forma tan warra de hacer routes, no tengo tiempo de aprender react router
    
    const onExploreClick = () => {
        setRecorrido(salas[5])
        setCurrentPage('recorrido')
    }

    const onCreadorClick = (creadorSeleccionado) => {
        if(creadorSeleccionado != null){
            setCreador(creadorSeleccionado);
            setCurrentPage('detalles_creador');
        }
    };

    const onSalaClick = (sala) => {
        if(sala != null){
            setRecorrido(sala);
            setCurrentPage('recorrido')
        }
    }

    return(
        <>
            {currentPage === 'exploracion' ? 
            <div className={styles.exploracion}>
                <div id={styles.menuexploracion}><Menu_busqueda onCreadorClick={onCreadorClick} onSalaClick={onSalaClick} isSideMenu={false}/></div>
                <div className={styles.contenido}>
                    <img src={exploracion_img} alt="exploracion_img"></img>
                    <div className={styles.button}><nav onClick={onExploreClick}><ul><li>Iniciar<span></span></li></ul></nav></div>
                </div>
            </div> : 
                currentPage == 'recorrido' ? 
                    <Recorrido goHome={goHome} goBack={goBack} recorrido={recorrido} onCreadorClick={onCreadorClick} onSalaClick={onSalaClick}/>
                :
                    <Detalles_creador goHome={goHome} goBack={goBack} creador={creador} onSalaClick={onSalaClick}/>}
        </>
    );
}

export default Exploracion;