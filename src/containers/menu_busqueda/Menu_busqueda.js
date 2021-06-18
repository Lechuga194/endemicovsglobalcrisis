import React, {useState, useEffect} from 'react';
import Searchbox from '../../components/searchbox/Searchbox'

//estaticos
import styles from './menu_busqueda.module.css'

//TODO quitar y pedir a la BD
let listacreadores = [
    {
        id: 0,
        rol: 'Artista',
        nombre: 'Sebastian',
        obras: 5

    },
    {
        id: 1,
        rol: 'Investigador',
        nombre: 'Isaac',
        obras: 3

    },
    {
        id: 2,
        rol: 'Curador',
        nombre: 'Nick',
        obras: 6

    },
    {
        id: 3,
        rol: 'Artista',
        nombre: 'Bogo',
        obras: 5

    },
    {
        id: 4,
        rol: 'Investigador',
        nombre: 'Juddy',
        obras: 3

    },
    {
        id: 5,
        rol: 'Curador',
        nombre: 'Nick Wilde',
        obras: 6

    },
    {
        id: 6,
        rol: 'Artista',
        nombre: 'Legosi',
        obras: 6

    }
]

function Menu_busqueda({onCreadorClick}) {

    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState('busqueda_nombres')

    const onButtonClick = (page) => setCurrentPage(page);
    const onChangeSearch = (event) => setSearch(event.target.value)

    const creadoresFiltrados = listacreadores.filter(creador => creador.nombre.toLowerCase().includes(search.toLowerCase()))
    const artistas = creadoresFiltrados.filter(creador => creador.rol === 'Artista');
    const investigadores = creadoresFiltrados.filter(creador => creador.rol === 'Investigador');
    const curadores = creadoresFiltrados.filter(creador => creador.rol === 'Curador');

    return(
        <div className={styles.busqueda}>
            <div className={styles.nav}>
                <Searchbox onChangeSearch={onChangeSearch}/>
                {currentPage == 'busqueda_nombres' ? 
                    <a onClick={() => onButtonClick('busqueda_salas')}>Buscar por salas</a> : 
                    <a onClick={() => onButtonClick('busqueda_nombres')}>Buscar por nombre</a>
                }
            </div>
            <div className={styles.listacreadores}>
                {currentPage == 'busqueda_salas' ? <div> Salas </div> : 
                    <div className={styles.creadores}>
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