import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../../containers/navbar/Navbar';
import ShowMoreText from 'react-show-more-text';
import Obra from '../obra/Obra'
import {texto, listofimages} from './utils'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from './detallescreador.module.css'

function Detalles_creador({goHome, goBack, creador}){

    const [currentCreador, setCurrentCreador] = useState(creador);
    const [selectedObra, setSelectedObra] = useState(null);
    const [currentPage, setCurrentPage] = useState('detalles_creador'); 

    const changeCreador = (newCreador) => {
        setCurrentCreador(newCreador)
        setCurrentPage('detalles_creador')
    }
    const onClickImage = (obraID) => {
        setSelectedObra(listofimages[obraID])
        setCurrentPage('obra')
    }
    const goBackDetalles = () => setCurrentPage('detalles_creador')

    return(
        currentPage == 'detalles_creador' ? 
            <div className={styles.container}>
            <div><Navbar goHome={goHome} goBack={goBack} changeCreador={changeCreador}/></div>
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
                            >{texto}</ShowMoreText>
                        </div>
                        <div className={styles.carousel}>
                            <Carousel 
                                autoPlay
                                emulateTouch
                                infiniteLoop
                                showThumbs={false}
                                stopOnHover
                                swipeable
                                useKeyboardArrows
                                onClickItem={onClickImage}
                                width='100%'>
                                {
                                    listofimages.map((image, i) => {
                                        return(
                                            <div key={i} className={styles.elementofcarousel}>
                                                <img src={image.src}/> 
                                            </div>
                                        );
                                    }) 
                                }
                            </Carousel>
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
                        >{texto}</ShowMoreText>
                        <div className={styles.textos}>
                            {
                                currentCreador.textos_investigacion != null ? 
                                currentCreador.textos_investigacion.map(texto =>
                                <div>
                                    <p id={styles.textotitulo}>{texto.titulo}</p>
                                    <p id={styles.textocuerpo}>{texto.texto}</p>
                                </div>) : <div>No hay textos</div> //TODO modificar que pasa si no hay textos
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
        :
        <div className={styles.container}>
            <div><Navbar goHome={goHome} goBack={goBackDetalles} changeCreador={changeCreador}/></div>
            <div><Obra creador={currentCreador} obra={selectedObra}/></div>
        </div>
    );

    
}

export default Detalles_creador;