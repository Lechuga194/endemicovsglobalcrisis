import React, {useState, useEffect} from 'react';
import Searchbox from '../../components/searchbox/Searchbox'
import {creadores, salas} from '../utils'
import styles from './menu_busqueda.module.css'

function Menu_busqueda({onCreadorClick, isSideMenu, changeCreador, onSalaClick}) {

    const getCreadores = () => {
        fetch('http://localhost:3001/getCreadoresNombre')
        .then(response => response.json())
    }

    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState('busqueda_nombres')
    const [selectedSala, setSelectedSala] = useState(salas[0])
    const [sala, setSala] = useState(null)

    const onButtonClick = (page) => setCurrentPage(page);
    const onChangeSearch = (event) => setSearch(event.target.value)

    const creadoresFiltrados = creadores.filter(creador => creador.nombre.toLowerCase().includes(search.toLowerCase()))
    const artistas = creadoresFiltrados.filter(creador => creador.rol === 'Artista');
    const investigadores = creadoresFiltrados.filter(creador => creador.rol === 'Investigador');
    const curadores = creadoresFiltrados.filter(creador => creador.rol === 'Curador');
    const resaltarSala = (sala) => setSelectedSala(sala);
    const cargaSala = (sala) => {onSalaClick(sala)}

    return(
        <div className={styles.busqueda}>
            <div className={styles.nav}>
                <Searchbox onChangeSearch={onChangeSearch}/>
                {currentPage == 'busqueda_nombres' ? 
                    <a onClick={() => onButtonClick('busqueda_salas')}>Buscar por salas</a> : 
                    <a onClick={() => onButtonClick('busqueda_nombres')}>Buscar por nombre</a>
                }
            </div>
            <div className={styles.tiposbusqueda}> 
                {currentPage == 'busqueda_nombres' ? 
                    <div className={styles.listacreadores}>
                        <div>
                            <p className={styles.creador}>Artistas</p>
                            <div> 
                                <ul>
                                    {
                                        isSideMenu ? 
                                        <li>{artistas.map(creador => 
                                            <p key={creador.id} onClick={() => changeCreador(creador)}>
                                                {creador.id} {creador.nombre} {creador.obras}</p>)}
                                        </li>
                                        : 
                                        <li>{artistas.map(creador => 
                                            <p key={creador.id} onClick={() => onCreadorClick(creador)}>
                                                {creador.id} {creador.nombre} {creador.obras}</p>)}
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                            <p className={styles.creador}>Investigadores</p>
                                <ul>
                                    <li>
                                    {
                                        isSideMenu ? 
                                        investigadores.map(creador => 
                                            <p key={creador.id} onClick={() => changeCreador(creador)}>
                                                {creador.id} {creador.nombre} {creador.obras}</p>)
                                        :
                                        investigadores.map(creador => 
                                            <p key={creador.id} onClick={() => onCreadorClick(creador)}>
                                                {creador.id} {creador.nombre} {creador.obras}</p>)
                                    }
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <p className={styles.creador}>Curadores</p>
                                <ul>
                                    <li>{curadores.map(creador => 
                                        <p key={creador.id}>{creador.id} {creador.nombre}</p>)}</li>
                                </ul>
                            </div>
                        </div>
                    </div> :
                    <div className={styles.listasalas}>
                    {isSideMenu ? 
                        <div className={styles.listasalamenu}>
                            <div className={styles.salas}>
                                {salas.map(sala => 
                                    <div 
                                        onClick={() => resaltarSala(sala)} 
                                        id={selectedSala.id == sala.id ? styles.selected : void 0}
                                        className={styles.sala}>
                                        <p>{'Sala' + ' ' + sala.id}</p>
                                    </div>)
                                }
                            </div>
                            <div className={styles.salatexto}>
                                <p>{selectedSala.texto}</p>
                            </div>
                            <div className={styles.button} onClick={() => onSalaClick(selectedSala)}><nav><ul><li>Iniciar<span></span></li></ul></nav></div>
                        </div>
                     :
                        <div className={styles.listasalasexploracion}>
                            <div className={styles.upper}>
                                <div className={styles.cuadrado} onClick={() => cargaSala(salas[0])}>
                                    <p>SALA 1</p>
                                    <p id={styles.detalles}>{salas[0].texto}</p>
                                </div>
                                <div className={styles.cuadradoinv} onClick={() => cargaSala(salas[1])} >
                                    <p id={styles.pinv}>SALA 2</p>
                                    <p id={styles.detalles}>{salas[1].texto}</p>
                                </div>
                                <div className={styles.cuadrado} onClick={() => cargaSala(salas[2])}>
                                    <p>SALA 3</p>
                                    <p id={styles.detalles}>{salas[2].texto}</p>
                                </div>
                                <div className={styles.cuadradoinv} onClick={() => cargaSala(salas[3])}>
                                    <p id={styles.pinv}>SALA 4</p>
                                    <p id={styles.detalles}>{salas[3].texto}</p>
                                </div>
                            </div>
                                <div className={styles.cuadradobase} onClick={() => cargaSala(salas[4])}>
                                    <p>SALA 5</p>
                                    <p id={styles.detalles}>{salas[4].texto}</p>
                                </div>
                    </div>}
                        </div>}
                        
            </div>
        </div>
    );

}

export default Menu_busqueda;