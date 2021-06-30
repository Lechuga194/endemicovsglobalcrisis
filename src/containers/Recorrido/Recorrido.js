import React, {useState, useEffect} from 'react'
import Navbar from '../navbar/Navbar'
import ObraArtistica from '../tipos_obra_recorrido/ObraArtistica'
import Investigacion from '../tipos_obra_recorrido/Investigacion'
import styles from './recorrido.module.css'
import {obras} from '../utils'

//Aqui debo hacer la consulta a la bd segun el arreglo de recorrido

function Recorrido({goHome, goBack, onCreadorClick, onSalaClick, recorrido}){
    const [creadoryobras, setCreadorYObras] = useState([])
    useEffect(() => {
        fetch('https://endemicovsglobalcrisis.herokuapp.com/getCreadores')
            .then(data => data.json())
            .then(creadores => {
                let creadoresFiltados = []
                recorrido.creadores.forEach(creadorid => {
                    const creadorTMP = creadores.find(creadorDB => {
                        return creadorid === creadorDB.id;
                    })
                    const obrasTMP = obras.filter(obra => {
                        return creadorTMP.id === obra.id_creador;
                    })
                    creadoresFiltados.push([creadorTMP, obrasTMP])
                })
                setCreadorYObras(creadoresFiltados);
            })
    }, []);

    return(
        <div className={styles.container}>
            <div><Navbar goHome={goHome} goBack={goBack} changeCreador={onCreadorClick} onSalaClick={onSalaClick}/></div>
            <div className={styles.containerobras}>
                {
                    creadoryobras.map((creadoryobra, i) => {
                        return(
                            <div key={i}>
                                {creadoryobra[0].rol === 'Artista' ?
                                    <ObraArtistica creadoryobra={creadoryobra}/>
                                :
                                    <Investigacion creadoryobra={creadoryobra}/>
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