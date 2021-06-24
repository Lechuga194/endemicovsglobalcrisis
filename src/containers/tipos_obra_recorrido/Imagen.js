import React, {useState, useEffect} from 'react'
import styles from './obra.module.css'
import ShowMoreText from 'react-show-more-text';
import { Carousel } from 'react-responsive-carousel';

function Imagen({creadoryobra}){

    const creador = creadoryobra[0];
    const obras = creadoryobra[1];
    const [textSelectet, setTextSelected] = useState(obras[0].textos)
    const [imageIsWider, setImageIsWider] = useState(false);
    const [currentObra, setCurrentObra] = useState(obras[0])
    const [isImageSelected, setIsImageSelected] = useState(false)
    
    const changeText = (text) => setTextSelected(text)
    const toFullScreen = () => setIsImageSelected(!isImageSelected) 

    if(currentObra.tipo === 'imagen'){
        const img = new Image();
        img.onload = function() {
            let isWider = (this.width > this.height);
            setImageIsWider(isWider);
        }
        img.src = obras[0].imagen.src;
    }

    const onChangeImage = (i) => {
        setCurrentObra(obras[i]);
    }

    return(
        !imageIsWider ? 
            <div className={isImageSelected ? styles.containerFS : styles.container}>
                <div className={isImageSelected ? styles.informacionHiiden :  styles.informacion}>
                    <p id={styles.titulo}>{currentObra.titulo}</p>
                    <p id={styles.datos}>{creador.nombre} / {creador.pais}</p>
                    <p id={styles.tecnica}>{currentObra.tipo === 'imagen' ? currentObra.imagen.tecnica : currentObra.video.tecnica}</p>
                    <div className={styles.textos}>
                        <div className={styles.opcionesTexto}>
                            {
                                currentObra.textos.map(texto =>
                                    <div 
                                    className={styles.tipoTextoContainer}
                                    onClick={() => changeText(texto)}
                                    id={texto.tipo === textSelectet ? styles.selected : void 0}>
                                        <p className={styles.tipoTexto}>{texto.tipo}</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className={styles.cuerpoTextoContainter}>
                            <ShowMoreText
                                lines={4}
                                more='Ver más...'
                                less='Ver menos...'
                                className={styles.componentevermas}
                                anchorClass={styles.componentevermasancho}
                                expanded={false}
                                width={0}
                            >{textSelectet.cuerpo}</ShowMoreText>
                        </div>
                    </div>
                </div>
                <div className={isImageSelected ? styles.obraFS : styles.obra}>
                            <Carousel 
                                emulateTouch
                                infiniteLoop
                                showThumbs={false}
                                stopOnHover
                                swipeable
                                useKeyboardArrows
                                onChange={onChangeImage}
                                width='100%'>
                                {
                                    obras.map((obra, i) => {
                                        return (
                                            obra.tipo === 'imagen' ? 
                                                <div key={i} className={styles.elementofcarousel}>
                                                    <img src={obra.imagen.src} alt="contenido"/> 
                                                </div>
                                            :
                                            <iframe width="200" height="400" src={obra.video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        );
                                    })
                                }
                            </Carousel>
                </div>
            </div>
            : 
            <div className={isImageSelected ? styles.containerFS : styles.container}>
                <div className={isImageSelected ? styles.obraFS : styles.obra}>
                    <img id={styles.wider} src={currentObra.imagen.src} onClick={toFullScreen} alt="contenido"></img>
                </div>
                <div className={isImageSelected ? styles.informacionHiiden :  styles.informacion}>
                    <p id={styles.titulo}>{currentObra.titulo}</p>
                    <p id={styles.datos}>{creador.nombre}/{creador.pais}</p>
                    <p id={styles.tecnica}>{currentObra.imagen.tecnica}</p>
                    <div className={styles.textos}>
                        <div className={styles.opcionesTexto}>
                            {
                                currentObra.textos.map(texto =>
                                    <div 
                                    className={styles.tipoTextoContainer}
                                    onClick={() => changeText(texto)}
                                    id={texto.tipo === textSelectet ? styles.selected : void 0}>
                                        <p className={styles.tipoTexto}>{texto.tipo}</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className={styles.cuerpoTextoContainter}>
                            <ShowMoreText
                                lines={4}
                                more='Ver más...'
                                less='Ver menos...'
                                className={styles.componentevermas}
                                anchorClass={styles.componentevermasancho}
                                expanded={false}
                                width={0}
                            >{textSelectet.cuerpo}</ShowMoreText>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Imagen;

