import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../../containers/navbar/Navbar';
import ShowMoreText from 'react-show-more-text';
import Obra from '../tipos_obra/Obra'
import {obras} from '../utils'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from './detallescreador.module.css'

function Detalles_creador({goHome, goBack, creador, onSalaClick}){

    const [currentCreador, setCurrentCreador] = useState(creador);
    const [selectedObra, setSelectedObra] = useState(null);
    const [currentPage, setCurrentPage] = useState('detalles_creador');

    const changeCreador = (newCreador) => {
        setCurrentCreador(newCreador)
        setCurrentPage('detalles_creador')
    }
    const onClickImage = (obra) => {
        setSelectedObra(obra)
        setCurrentPage('obra')
    }
    const currentObras = obras.filter((obra, i) => {
        return obra.id_creador == currentCreador.id;
    })
    const goBackDetalles = () => setCurrentPage('detalles_creador')

    return(
        currentPage == 'detalles_creador' ? 
            <div className={styles.container}>
            <div><Navbar goHome={goHome} goBack={goBack} changeCreador={changeCreador} onSalaClick={onSalaClick}/></div>
            {
                currentCreador.rol == 'Artista' ? 
                    <div>
                        <div className={styles.datos}>
                            <h1>{currentCreador.nombre}</h1>
                            <h3>{currentCreador.pais}</h3>
                            <ShowMoreText
                                lines={4}
                                more='Ver más...'
                                less='Ver menos...'
                                className={styles.componentevermas}
                                anchorClass={styles.componentevermasancho}
                                expanded={false}
                                width={0}
                            >{currentCreador.biografia}</ShowMoreText>
                        </div>
                        <div className={styles.carousel}>
                            {currentObras.length <= 0 ? <div>No hay obras para mostrar</div> :
                                <Carousel 
                                    autoPlay
                                    emulateTouch
                                    infiniteLoop
                                    showThumbs={false}
                                    stopOnHover
                                    swipeable
                                    useKeyboardArrows
                                    width='100%'>
                                    {
                                        currentObras.map((obra, i) => {
                                            return (
                                                <div key={i} className={styles.elementofcarousel} onClick={() => onClickImage(obra)}>
                                                    <img src={obra.contenido.src}/> 
                                                </div>
                                            );
                                        })
                                    }
                                </Carousel>
                            }
                        </div>
                    </div> 
                : 
                <div>
                    <div className={styles.datos}>
                        <h1>{currentCreador.nombre}</h1>
                        <h3>{currentCreador.pais}</h3>
                        <ShowMoreText
                            lines={4}
                            more='Ver más...'
                            less='Ver menos...'
                            className={styles.componentevermas}
                            anchorClass={styles.componentevermasancho}
                            expanded={false}
                            width={0}
                        >{currentCreador.biografia}</ShowMoreText>
                        {currentObras.length <= 0 ? <div style={{marginTop: "50px"}}>No hay obras para mostrar</div> : 
                        <div className={styles.textos}>
                            {
                                currentObras.map((obra, i) => {
                                    console.log(obra)
                                    return (
                                        <div key={i}>
                                            <p id={styles.textotitulo}>{obra.contenido.titulo}</p>
                                            <p id={styles.textocuerpo}>{obra.contenido.texto}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>}
                    </div>
                </div>
            }
        </div>
        :
        <div className={styles.container}>
            <div><Navbar goHome={goHome} goBack={goBackDetalles} changeCreador={changeCreador} onSalaClick={onSalaClick}/></div>
            <div><Obra creador={currentCreador} obra={selectedObra}/></div>
        </div>
    );

    
}

export default Detalles_creador;