import React, {useState, useEffect} from 'react';

//components
import Home from '../components/home/Home'
import Exploracion from '../components/exploracion/Exploracion'

//Containers
import Menu_busqueda from '../containers/menu_busqueda/Menu_busqueda'

//Statics
import './app.css'

function App() {
    const [currentPage, setCurrentPage] = useState('exploracion') //TODO por defecto debe ser home

    const onExploreClick = () => setCurrentPage('exploracion');
    const onCreadorClick = (creadorID) => setCurrentPage('creador');

    return(
        currentPage == 'home' ? <Home onExploreClick={onExploreClick}/> : 
            <div className="exploracion">
                <Menu_busqueda />
                <div id='vr'></div>
                <Exploracion />
            </div>
    );
}

export default App;