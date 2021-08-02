import React from 'react'
import styles from './obra.module.css'
import ShowMoreText from 'react-show-more-text';

function Investigacion({creadoryobra}){

    const creador = creadoryobra[0]
    const obras = creadoryobra[1]

    return(
        <div class={styles.containerInv}>
            <div className={styles.datos}>
                <h1>{creador.nombre}</h1>
                <h3>{creador.pais}</h3>
                <div className={styles.textboxbio} id={styles.scrollbar}>
                    <ShowMoreText
                        lines={4}
                        more='Ver más...'
                        less='Ver menos...'
                        className={styles.componentevermas}
                        anchorClass={styles.componentevermasancho}
                        expanded={false}
                        width={0}
                    >{creador.biografia}</ShowMoreText>
                </div>
                <div className={styles.textos}>
                    {
                        obras.map(obra => {
                            return(
                                <div key={obra.id_obra}>
                                    <p id={styles.textotitulo}>{obra.titulo}</p>
                                    <div className={styles.textbox} id={styles.scrollbar}>
                                        <ShowMoreText
                                            id={styles.textocuerpo}
                                            lines={18}
                                            more='Ver más...'
                                            less='Ver menos...'
                                            className={styles.componentevermas}
                                            anchorClass={styles.componentevermasancho}
                                            expanded={false}
                                            width={0}
                                        >{obra.textos[0]}</ShowMoreText>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Investigacion;