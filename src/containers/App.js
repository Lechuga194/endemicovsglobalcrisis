import React, {useState, useEffect} from 'react';

//components
import Home from '../components/home/Home'

//containers
import Exploracion from './exploracion/Exploracion'

function App() {
    const [currentPage, setCurrentPage] = useState('exploracion') //TODO por defecto debe ser home

    const onExploreClick = () => setCurrentPage('exploracion');

    return(
        currentPage == 'home' ? <Home onExploreClick={onExploreClick}/> : <Exploracion />
    );
}

export default App;