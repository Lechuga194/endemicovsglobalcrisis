import React, {useState} from 'react'
import styles from './obra.module.css'
import ShowMoreText from 'react-show-more-text';

function Obra({creador, obra}){

    const [textSelectet, setTextSelected] = useState(obra.textos[0])
    const changeText = (text) => setTextSelected(text)

    return(
        obra.tipo == 'imagen' ? 
            <div className={styles.container}>
                <div className={styles.informacion}>
                    <p id={styles.titulo}>{obra.titulo}</p>
                    <p id={styles.datos}>{creador.nombre}/{creador.pais}</p>
                    <p id={styles.tecnica}>{obra.tecnica}</p>
                    <div className={styles.textos}>
                        <div className={styles.opcionesTexto}>
                            {
                                obra.textos.map(texto =>
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
                <div className={styles.obra}>
                    <img src={obra.src}></img>
                </div>
            </div>
            :
            <div>
                
            </div>
    );
}

export default Obra;