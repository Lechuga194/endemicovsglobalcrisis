import React, {useState, useEffect} from 'react';
import Searchbox from '../../components/searchbox/Searchbox'

//estaticos
import './menu_busqueda.css'

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

function Menu_busqueda() {

    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState('exploracion')
    const [creador, setCreador] = useState(null)

    const onButtonClick = (page) => setCurrentPage(page);
    const onChangeSearch = (event) => setSearch(event.target.value)
    const creadoresFiltrados = listacreadores.filter(creador => creador.nombre.toLowerCase().includes(search.toLowerCase()))

    const artistas = creadoresFiltrados.filter(creador => creador.rol === 'Artista');
    const investigadores = creadoresFiltrados.filter(creador => creador.rol === 'Investigador');
    const curadores = creadoresFiltrados.filter(creador => creador.rol === 'Curador');


    const onCreadorClick = (creadorId) => {
        console.log(creadorId)
    }

    return(
        <div className="busqueda">
            <div className="nav">
                <Searchbox onChangeSearch={onChangeSearch}/>
                {currentPage == 'exploracion' ? 
                    <a onClick={() => onButtonClick('salas')}>Buscar por salas</a> : 
                    <a onClick={() => onButtonClick('exploracion')}>Buscar por nombre</a>
                }
            </div>
            <div className="listacreadores">
                {
                    currentPage == 'salas' ? <div> Salas </div> : 
                    <div className="creadores">
                        <div>
                            <h1>Artistas</h1>
                            <div> 
                                <ul>
                                    <li>{artistas.map(creador => 
                                        <p key={creador.id} onClick={() => onCreadorClick(creador.id)}>
                                            {creador.id} {creador.nombre} {creador.obras}</p>)}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1>Investigadores</h1>
                                <ul>
                                <li>{investigadores.map(creador => 
                                        <p key={creador.id} onClick={() => onCreadorClick(creador.id)}>
                                            {creador.id} {creador.nombre} {creador.obras}</p>)}
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h1>Curadores</h1>
                                <ul>
                                    <li>{curadores.map(creador => 
                                        <p key={creador.id}>{creador.id} {creador.nombre}</p>)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );

}

export default Menu_busqueda;