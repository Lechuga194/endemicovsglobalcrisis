import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../../containers/navbar/Navbar';
import ShowMoreText from 'react-show-more-text';
import Imagen from '../tipos_obra/Imagen'
import Video from '../tipos_obra/Video'
import Investigacion from '../tipos_obra/Investigacion'
import {obras} from '../utils'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from './detallescreador.module.css'

function Detalles_creador({goHome, goBack, creador, onSalaClick}){

    const [currentCreador, setCurrentCreador] = useState(creador);
    const [selectedObra, setSelectedObra] = useState(null);
    const [currentPage, setCurrentPage] = useState('detalles_creador');
    const [tipoObra, setTipoObra] = useState('');

    const changeCreador = (newCreador) => {
        setCurrentCreador(newCreador)
        setCurrentPage('detalles_creador')
    }
    const onClickImage = (obra) => {
        setSelectedObra(obra)
        setTipoObra(obra.tipo)
        setCurrentPage('obra')
    }
    const currentObras = obras.filter((obra, i) => {
        return obra.id_creador === currentCreador.id;
    })
    const goBackDetalles = () => setCurrentPage('detalles_creador')

    return(
        currentPage === 'detalles_creador' ? 
            <div className={styles.container}>
            <div><Navbar goHome={goHome} goBack={goBack} changeCreador={changeCreador} onSalaClick={onSalaClick}/></div>
            {
                currentCreador.rol === 'Artista' ? 
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
                                                obra.tipo === 'imagen' ? 
                                                    <div key={i} className={styles.elementofcarousel} onClick={() => onClickImage(obra)}>
                                                        <img src={obra.imagen.src} alt="contenido"/> 
                                                    </div>
                                                :
                                                <iframe width="200" height="400" src={obra.video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                                            <p id={styles.textotitulo}>{obra.titulo}</p>
                                            <p id={styles.textocuerpo}>{obra.investigacion.texto}</p>
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
            {tipoObra === 'imagen' ?
                <div><Imagen creador={currentCreador} obra={selectedObra}/></div>
                :
                tipoObra === 'video' ?
                    <div><Video creador={currentCreador} obra={selectedObra}/></div>
                    :
                    <div><Investigacion creador={currentCreador} obra={selectedObra}/></div>
            }
        </div>
    );

    
}

export default Detalles_creador;