import React from 'react'
import styles from './obra.module.css'
import ShowMoreText from 'react-show-more-text';

function Investigacion({creador, obra}){
    return(
        <div class={styles.container}>
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
                >{creador.biografia}</ShowMoreText>
                <div className={styles.textos}>
                    <div key={obra.id_obra}>
                        <p id={styles.textotitulo}>{obra.titulo}</p>
                        <div className={styles.textbox} id={styles.scrollbar}>
                            <ShowMoreText
                                id={styles.textocuerpo}
                                lines={9}
                                more='Ver más...'
                                less='Ver menos...'
                                className={styles.componentevermas}
                                anchorClass={styles.componentevermasancho}
                                expanded={false}
                                width={0}
                            >{obra.investigacion.texto}</ShowMoreText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Investigacion;