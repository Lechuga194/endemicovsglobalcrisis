import React, {useState, useEffect} from 'react';
import Searchbox from '../../components/searchbox/Searchbox'
import Creadores from '../../components/creadores/Creadores'
import Salas from '../../components/salas/Salas'

//estaticos
import exploracion_img from '../../static/exploracion.jpg'
import './exploracion.css'

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

function Exploracion() {

    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState('exploracion')
    
    const onButtonClick = (page) => setCurrentPage(page);
    
    const onChangeSearch = (event) => setSearch(event.target.value)
    const creadoresFiltrados = listacreadores.filter(creador => {return creador.nombre.toLowerCase().includes(search.toLowerCase())})

    return(
        <div className="exploracion">
            <div className="busqueda">
                <div className="nav">
                    <Searchbox onChangeSearch={onChangeSearch}/>
                    {currentPage == 'exploracion' ? 
                        <a onClick={() => onButtonClick('salas')}>Buscar por salas</a> : 
                        <a onClick={() => onButtonClick('exploracion')}>Buscar por nombre</a>
                    }
                </div>
                <div className="listacreadores">
                    {currentPage == 'salas' ? <Salas /> : <Creadores listaCreadores={creadoresFiltrados} />}
                </div>
            </div>
            <div id='vr'></div>
            <div className="contenido">
                <img src={exploracion_img} alt="exploracion_img"></img>
                <h1>Iniciar Recorrido Completo</h1>
            </div>
        </div>
    );

}

export default Exploracion;