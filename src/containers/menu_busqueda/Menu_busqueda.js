import React, {useState, useEffect} from 'react';
import Searchbox from '../../components/searchbox/Searchbox'
import {salas, url} from '../utils'
import styles from './menu_busqueda.module.css'

function Menu_busqueda({onCreadorClick, isSideMenu, changeCreador, onSalaClick}) {

    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState('busqueda_nombres')
    const [selectedSala, setSelectedSala] = useState(salas[0])
    const [sala, setSala] = useState(null)
    
    //BD
    const [creadores, setCreadores] = useState([]);
    
    useEffect(() => {
        fetch(`${url}/getCreadores`)
            .then(data => data.json())
            .then(creadores => {
                setCreadores(creadores)
            })
    }, []);

    const onButtonClick = (page) => setCurrentPage(page);
    const onChangeSearch = (event) => setSearch(event.target.value)
    const resaltarSala = (sala) => setSelectedSala(sala);
    const cargaSala = (sala) => {onSalaClick(sala)}

    //Funciones para filtrar la busqueda
    const creadoresFiltrados = creadores.filter(creador => creador.nombre.toLowerCase().includes(search.toLowerCase()))
    const artistas = creadoresFiltrados.filter(creador => creador.rol === 'Artista');
    const investigadores = creadoresFiltrados.filter(creador => creador.rol === 'Investigador');
    const curadores = creadoresFiltrados.filter(creador => creador.rol === 'Curador');
    

    return(
        <div className={styles.busqueda}>
            <div className={styles.nav}>
                <Searchbox onChangeSearch={onChangeSearch}/>
                {currentPage === 'busqueda_nombres' ? 
                    <a onClick={() => onButtonClick('busqueda_salas')}>Buscar por salas</a> : 
                    <a onClick={() => onButtonClick('busqueda_nombres')}>Buscar por nombre</a>
                }
            </div>
                {currentPage == 'busqueda_nombres' ? 
                    <div className={styles.listacreadores}>

                        <div>
                            <span className={styles.creador}>Artistas</span>
                            <div className={styles.textbox} id={styles.scrollbar}> 
                                <ul>
                                    {
                                        isSideMenu ? 
                                        <li>{artistas.map(creador => 
                                            <p key={creador.id} onClick={() => changeCreador(creador)}>
                                                {creador.nombre}</p>)}
                                        </li>
                                        : 
                                        <li>{artistas.map(creador => 
                                            <p key={creador.id} onClick={() => onCreadorClick(creador)}>
                                                {creador.nombre}</p>)}
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div>
                            <span className={styles.creador}>Investigadores</span>
                                <ul>
                                    <li>
                                    {
                                        isSideMenu ? 
                                        investigadores.map(creador => 
                                            <p key={creador.id} onClick={() => changeCreador(creador)}>
                                                {creador.nombre}</p>)
                                        :
                                        investigadores.map(creador => 
                                            <p key={creador.id} onClick={() => onCreadorClick(creador)}>
                                                {creador.nombre}</p>)
                                    }
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div> 
                    :
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
                                    <p>Sala 1</p>
                                    <p id={styles.detalles}>{salas[0].texto}</p>
                                </div>
                                <div className={styles.cuadradoinv} onClick={() => cargaSala(salas[1])} >
                                    <p id={styles.pinv}>Sala 2</p>
                                    <p id={styles.detalles}>{salas[1].texto}</p>
                                </div>
                                <div className={styles.cuadrado} onClick={() => cargaSala(salas[2])}>
                                    <p>Sala 3</p>
                                    <p id={styles.detalles}>{salas[2].texto}</p>
                                </div>
                                <div className={styles.cuadradoinv} onClick={() => cargaSala(salas[3])}>
                                    <p id={styles.pinv}>Sala 4</p>
                                    <p id={styles.detalles}>{salas[3].texto}</p>
                                </div>
                            </div>
                            <div className={styles.cuadradobase} onClick={() => cargaSala(salas[4])}>
                                <p>Sala 5</p>
                                <p id={styles.detalles}>{salas[4].texto}</p>
                            </div>
                    </div>}
                        </div>}
                        
            </div>
    );

}

export default Menu_busqueda;