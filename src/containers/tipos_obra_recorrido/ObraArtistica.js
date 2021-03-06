import React, {useState, useEffect} from 'react'
import styles from './obra.module.css'
import ShowMoreText from 'react-show-more-text';
import { Carousel } from 'react-responsive-carousel';

function ObraArtistica({creadoryobra}){

    const creador = creadoryobra[0];
    const obras = creadoryobra[1];
    const [currentObra, setCurrentObra] = useState(obras[0])
    const [textSelectet, setTextSelected] = useState(obras[0].textos[0])
    const [imageIsWider, setImageIsWider] = useState(false);
    const [isImageSelected, setIsImageSelected] = useState(false)
    
    const changeText = (text) => setTextSelected(text)
    const toFullScreen = () => setIsImageSelected(!isImageSelected)

    console.log(creadoryobra)

    if(currentObra.tipo === 'imagen'){
        const img = new Image();
        img.onload = function() {
            let isWider = (this.width > this.height);
            setImageIsWider(isWider);
        }
        img.src = currentObra.src;
    }

    const onChangeImage = (i) => {
        setCurrentObra(obras[i]);
        setTextSelected(obras[i].textos[0])
    }

    return(
        isImageSelected ? <div className={styles.fullScreen}><img onClick={toFullScreen} src={currentObra.src} className={styles.obra}></img></div> : 
        <div className={styles.container}>
            <div className={styles.informacion}>
                <p id={styles.titulo}>{currentObra.titulo}</p>
                <p id={styles.datos}>{creador.nombre} / {creador.pais}</p>
                <p id={styles.tecnica}>{currentObra.tipo === 'imagen' ? currentObra.tecnica : currentObra.tecnica}</p>
                <div className={styles.textos}>
                    <div className={styles.opcionesTexto}>
                        {
                            currentObra.textos.map(texto =>
                                <div 
                                className={styles.tipoTextoContainer}
                                onClick={() => changeText(texto)}
                                id={texto.tipo === textSelectet ? styles.selected : void 0}>
                                    <p className={styles.tipoTexto}>{texto[0]}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className={styles.cuerpoTextoContainter}>
                        <div className={styles.textboxArte} id={styles.scrollbar}>
                            <ShowMoreText
                                lines={7}
                                more='Ver m??s...'
                                less='Ver menos...'
                                className={styles.componentevermas}
                                anchorClass={styles.componentevermasancho}
                                expanded={false}
                                width={0}
                            >{textSelectet[1]}</ShowMoreText>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.obra}>
                <Carousel 
                    emulateTouch
                    infiniteLoop
                    showThumbs={false}
                    stopOnHover
                    swipeable
                    useKeyboardArrows
                    onChange={onChangeImage}
                    onClickItem={toFullScreen}
                    width='100%'>
                    {
                        obras.map((obra, i) => {
                            return (
                                obra.tipo === 'imagen' ? 
                                    <div key={i} className={styles.elementofcarousel}>
                                        <img src={obra.src} alt="contenido"/> 
                                    </div>
                                :
                                <iframe width="200" height="400" src={obra.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            );
                        })
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default ObraArtistica;

