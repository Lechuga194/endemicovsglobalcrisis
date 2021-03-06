import React, {useState, useEffect} from 'react'
import styles from './obra.module.css'
import ShowMoreText from 'react-show-more-text';

function Imagen({creador, obra}){

    const [textSelectet, setTextSelected] = useState(obra.textos[0])
    const [isImageSelected, setIsImageSelected] = useState(false)
    const [imageIsWider, setImageIsWider] = useState(false);
    
    const changeText = (text) => setTextSelected(text)
    const toFullScreen = () => setIsImageSelected(!isImageSelected)

    const img = new Image();
    img.onload = function() {
        let isWider = (this.width > this.height);
        setImageIsWider(isWider);
    }
    img.src = obra.src;

    useEffect(() => {
        console.log(creador);
        console.log(obra, "***************")
    }, [])

    return(
        <div className={isImageSelected ? styles.containerFS : styles.container}>
            <div className={isImageSelected ? styles.informacionHiiden :  styles.informacion}>
                <p id={styles.titulo}>{obra.titulo}</p>
                <p id={styles.datos}>{creador.nombre} / {creador.pais}</p>
                <p id={styles.tecnica}>{obra.tecnica}</p>
                <div className={styles.textos}>
                    <div className={styles.opcionesTexto}>
                        {
                            obra.textos.map(texto =>
                                <div 
                                className={styles.tipoTextoContainer}
                                onClick={() => changeText(texto)}
                                id={texto[0] === textSelectet ? styles.selected : void 0}>
                                    <p className={styles.tipoTexto}>{texto[0]}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className={styles.cuerpoTextoContainter}>
                        <div className={styles.textboxArte} id={styles.scrollbar}>
                            <ShowMoreText
                                lines={4}
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
            <div className={isImageSelected ? styles.obraFS : styles.obra}>
                <img src={obra.src} onClick={toFullScreen} alt="contenido"></img>
            </div>
        </div>
    );
}

export default Imagen;