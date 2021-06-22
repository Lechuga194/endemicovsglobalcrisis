import React, {useState} from 'react'
import styles from './obra.module.css'
import ShowMoreText from 'react-show-more-text';

function Obra({creador, obra}){

    const [textSelectet, setTextSelected] = useState(obra.contenido.textos[0])
    const [isImageSelected, setIsImageSelected] = useState(false)
    const [imageIsWider, setImageIsWider] = useState(false);
    
    const changeText = (text) => setTextSelected(text)
    const toFullScreen = () => setIsImageSelected(!isImageSelected)

    const img = new Image();
    img.onload = function() {
        let isWider = (this.width > this.height);
        setImageIsWider(isWider);
    }
    img.src = obra.contenido.src;

    return(
        !imageIsWider ? 
            <div className={isImageSelected ? styles.containerFS : styles.container}>
                <div className={isImageSelected ? styles.informacionHiiden :  styles.informacion}>
                    <p id={styles.titulo}>{obra.contenido.titulo}</p>
                    <p id={styles.datos}>{creador.nombre}/{creador.pais}</p>
                    <p id={styles.tecnica}>{obra.contenido.tecnica}</p>
                    <div className={styles.textos}>
                        <div className={styles.opcionesTexto}>
                            {
                                obra.contenido.textos.map(texto =>
                                    <div 
                                    className={styles.tipoTextoContainer}
                                    onClick={() => changeText(texto)}
                                    id={texto.tipo == textSelectet ? styles.selected : void 0}>
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
                    <img src={obra.contenido.src} onClick={toFullScreen} ></img>
                </div>
            </div> : 
                <div className={isImageSelected ? styles.containerFS : styles.container}>
                    <div className={isImageSelected ? styles.obraFS : styles.obra}>
                        <img id={styles.wider} src={obra.contenido.src} onClick={toFullScreen} ></img>
                    </div>
                    <div className={isImageSelected ? styles.informacionHiiden :  styles.informacion}>
                        <p id={styles.titulo}>{obra.contenido.titulo}</p>
                        <p id={styles.datos}>{creador.nombre}/{creador.pais}</p>
                        <p id={styles.tecnica}>{obra.contenido.tecnica}</p>
                        <div className={styles.textos}>
                            <div className={styles.opcionesTexto}>
                                {
                                    obra.contenido.textos.map(texto =>
                                        <div 
                                        className={styles.tipoTextoContainer}
                                        onClick={() => changeText(texto)}
                                        id={texto.tipo == textSelectet ? styles.selected : void 0}>
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

export default Obra;