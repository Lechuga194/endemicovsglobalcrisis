import React, {useState, useEffect} from 'react'
import Navbar from '../navbar/Navbar'
import Imagen from '../tipos_obra/Imagen'
import Investigacion from '../tipos_obra/Investigacion'
import Video from '../tipos_obra/Video'
import styles from './recorrido.module.css'
import {creadores, obras} from '../utils'

//Aqui debo hacer la consulta a la bd segun el arreglo de recorrido

function Recorrido({goHome, goBack, onCreadorClick, onSalaClick, recorrido}){
    const [currentObras, setCurrentObras] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/getCreadores')
            .then(data => data.json())
            .then(creadores => {
            //Obtenemos las obras mediante el ID
            let obrasFiltradas = []
            recorrido.obras.forEach(element => {
                const tmpObra = obras.find(obra => {
                    return obra.id_obra === element
                })
                const tmpCreador = creadores.find(creador => {
                    return creador.id === tmpObra.id_creador;
                })
                obrasFiltradas.push([tmpCreador, tmpObra]);
            });
            setCurrentObras(obrasFiltradas)
            })
    }, []);

    


    //TODO Si voy a implementar lo del color representativo iria aqui

    return(
        <div className={styles.container}>
            <div><Navbar goHome={goHome} goBack={goBack} changeCreador={onCreadorClick} onSalaClick={onSalaClick}/></div>
            <div className={styles.containerobras}>
                {
                    currentObras.map((obra, i) => {
                        return(
                            <div key={i}>
                                {obra[0].rol === 'Artista' ?
                                    obra[1].tipo === 'imagen' ?
                                        <Imagen creador={obra[0]} obra={obra[1]}/>
                                        :
                                        <Video creador={obra[0]} obra={obra[1]}/>
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