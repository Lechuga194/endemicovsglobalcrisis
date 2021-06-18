import React, {useState, useEffect} from 'react';
import Searchbox from '../../components/searchbox/Searchbox'
import listacreadores from './utils'
import styles from './menu_busqueda.module.css'

function Menu_busqueda({onCreadorClick}) {

    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState('busqueda_nombres')

    const onButtonClick = (page) => setCurrentPage(page);
    const onChangeSearch = (event) => setSearch(event.target.value)

    const creadoresFiltrados = listacreadores.filter(creador => creador.nombre.toLowerCase().includes(search.toLowerCase()))
    const artistas = creadoresFiltrados.filter(creador => creador.rol === 'Artista');
    const investigadores = creadoresFiltrados.filter(creador => creador.rol === 'Investigador');
    const curadores = creadoresFiltrados.filter(creador => creador.rol === 'Curador');


    //TODO CUANDO PULSO PARA SALAS EL RESULTADO QUEDA DETRAS DE LA BARRA DE BUSQUEDA

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
                {currentPage == 'busqueda_salas' ? <div> Salas </div> : 
                    <div className={styles.listacreadores}>
                        <div>
                            <p className={styles.creador}>Artistas</p>
                            <div> 
                                <ul>
                                    <li>{artistas.map(creador => 
                                        <p key={creador.id} onClick={() => onCreadorClick(creador)}>
                                            {creador.id} {creador.nombre} {creador.obras}</p>)}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                            <p className={styles.creador}>Investigadores</p>
                                <ul>
                                <li>{investigadores.map(creador => 
                                        <p key={creador.id} onClick={() => onCreadorClick(creador)}>
                                            {creador.id} {creador.nombre} {creador.obras}</p>)}
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
                    </div>}
            </div>
        </div>
    );

}

export default Menu_busqueda;