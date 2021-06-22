import React, {useState, useEffect} from 'react';
import Searchbox from '../../components/searchbox/Searchbox'
import {creadores, salas} from '../utils'
import styles from './menu_busqueda.module.css'

function Menu_busqueda({onCreadorClick, isSideMenu, changeCreador}) {

    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState('busqueda_nombres') //TODO POR DEFECTO DEBE SER NOMBRES
    const [sala, setSala] = useState(salas[0])

    const onButtonClick = (page) => setCurrentPage(page);
    const onChangeSearch = (event) => setSearch(event.target.value)

    const creadoresFiltrados = creadores.filter(creador => creador.nombre.toLowerCase().includes(search.toLowerCase()))
    const artistas = creadoresFiltrados.filter(creador => creador.rol === 'Artista');
    const investigadores = creadoresFiltrados.filter(creador => creador.rol === 'Investigador');
    const curadores = creadoresFiltrados.filter(creador => creador.rol === 'Curador');
    const cambiaSala = (id) => setSala(id);
    const onExploreClick = () => {}

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
                                {salas.map(item => 
                                    <div 
                                        onClick={() => cambiaSala(item)} 
                                        id={sala.id == item.id ? styles.selected : void 0}
                                        className={styles.sala}>
                                        <p>{'Sala' + ' ' + item.id}</p>
                                    </div>)
                                }
                            </div>
                            <div className={styles.salatexto}>
                                <p>{sala.texto}</p>
                            </div>
                            <div className={styles.button}><nav onClick={onExploreClick}><ul><li>Iniciar<span></span></li></ul></nav></div>
                        </div>
                     :
                        <div className={styles.listasalasexploracion}>
                            <div className={styles.upper}>
                                <div className={styles.cuadrado}>
                                    <p>SALA 1</p>
                                    <p id={styles.detalles}>{salas[0].texto}</p>
                                </div>
                                <div className={styles.cuadradoinv}>
                                    <p id={styles.pinv}>SALA 2</p>
                                    <p id={styles.detalles}>{salas[1].texto}</p>
                                </div>
                                <div className={styles.cuadrado}>
                                    <p>SALA 3</p>
                                    <p id={styles.detalles}>{salas[2].texto}</p>
                                </div>
                                <div className={styles.cuadradoinv}>
                                    <p id={styles.pinv}>SALA 4</p>
                                    <p id={styles.detalles}>{salas[3].texto}</p>
                                </div>
                            </div>
                                <div className={styles.cuadradobase}>
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