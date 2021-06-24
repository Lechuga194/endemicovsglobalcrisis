import React, {useState} from 'react'
import styles from './obra.module.css'
import ShowMoreText from 'react-show-more-text';

function Imagen({creador, obra}){

    const [textSelectet, setTextSelected] = useState(obra.textos[0])
    const changeText = (text) => setTextSelected(text)

    return(
        
            <div className={ styles.containerV}>
                <div className={styles.informacion}>
                    <p id={styles.titulo}>{obra.titulo}</p>
                    <p id={styles.datos}>{creador.nombre}/{creador.pais}</p>
                    <p id={styles.tecnica}>{obra.video.tecnica}</p>
                    <div className={styles.textos}>
                        <div className={styles.opcionesTexto}>
                            {
                                obra.textos.map(texto =>
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
                                lines={10}
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
                <div className={styles.obra}>
                    <iframe width="500" height="400" src={obra.video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                </div>
            </div> 
    );
}

export default Imagen;