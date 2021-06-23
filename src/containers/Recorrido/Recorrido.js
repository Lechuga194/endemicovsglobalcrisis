import React, {useState} from 'react'
import Navbar from '../navbar/Navbar'
import Obra from '../tipos_obra/Obra'
import Investigacion from '../tipos_obra/Investigacion'
import styles from './recorrido.module.css'
import {creadores, obras} from '../utils'

//Aqui debo hacer la consulta a la bd segun el arreglo de recorrido

function Recorrido({goHome, goBack, onCreadorClick, onSalaClick, recorrido}){
    
    //Seleccion de creadorres y obras para el componente Obra
    let obrasFiltradas = []
    recorrido.obras.forEach(item => {
        const creador = creadores.find(creador => {
            return creador.id == item.id_creador;
        })
        const obra = obras.find(obra => {
            return creador.id == item.id_creador && item.id_obra == obra.id_obra;
        })
        obrasFiltradas.push([creador, obra]);
    })

    console.log(obrasFiltradas[0])

    return(
        <div className={styles.container}>
            <div><Navbar goHome={goHome} goBack={goBack} changeCreador={onCreadorClick} onSalaClick={onSalaClick}/></div>
            <div className={styles.containerobras}>
                {
                    obrasFiltradas.map((obra, i) => {
                        return(
                            <div key={i}>
                                {obra[0].rol == 'Artista' ?
                                    <Obra creador={obra[0]} obra={obra[1]}/>
                                :
                                    <Investigacion creador={obra[0]} obra={obra[1]}/>
                                }
                            </div> 
                            
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Recorrido;