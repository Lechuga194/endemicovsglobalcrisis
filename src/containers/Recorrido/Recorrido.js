import React from 'react'
import Obra from '../obra/Obra'
import Navbar from '../navbar/Navbar'
import styles from './recorrido.module.css'
import obras from './utils'
import {listacreadores} from '../menu_busqueda/utils'

//Aqui debo hacer la consulta a la bd segun el arreglo de recorrido

function Recorrido({goHome, goBack, onCreadorClick ,recorrido}){
    console.log(listacreadores)
    console.log(obras)
    console.log(recorrido)

    return(
        <div className={styles.container}>
            <div><Navbar goHome={goHome} goBack={goBack} changeCreador={onCreadorClick}/></div>
            <div className={styles.containerobras}>
                {/* {
                    recorrido.map((obra, i) => {
                        return(
                            <div className={styles.obra}>
                                {
                                    obras.map((obra, i) => {
                                        return(
                                            <div>
                                                <Obra 
                                                    creador={
                                                        listacreadores.filter(creador => {
                                                            return obras[i].id_creador == creador.id;
                                                        })
                                                    } 
                                                    obra={
                                                        obras.filter(obra => {
                                                            return obras[i].id_obra
                                                        })
                                                    }
                                                />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                } */}
            </div>
        </div>
    );
}

export default Recorrido;