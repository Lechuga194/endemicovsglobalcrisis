import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../../components/navbar/Navbar';
import ShowMoreText from 'react-show-more-text';
import {texto, listofimages} from './utils'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from './detallescreador.module.css'

function Detalles_creador({goHome, goBack, creador}){

    const executeOnClick = (isExpanded) => console.log(isExpanded);
    const onClickImage = (id) =>{console.log(id)}

    return(
        <div className={styles.container}>
            <div><Navbar goHome={goHome} goBack={goBack}/></div>
            {
                creador.rol == 'Artista' ? 
                    <div>
                        <div className={styles.datos}>
                            <h1>{creador.nombre}</h1>
                            <h3>{creador.pais}</h3>
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
                                width='100%'>
                                {
                                    listofimages.map((image, i) => {
                                        return(
                                            <div key={i} className={styles.elementofcarousel}>
                                                <img src={image.src} onClick={() => onClickImage(image.i)}/> 
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
                        <h1>{creador.nombre}</h1>
                        <h3>{creador.pais}</h3>
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
                                creador.textos_investigacion != null ? 
                                creador.textos_investigacion.map(texto =>
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
    );

    
}

export default Detalles_creador;