import React, {useState, useEffect} from 'react';
import Home from '../components/home/Home'
import Exploracion from './exploracion/Exploracion'

//Statics
import './app.css'

function App() {
    const [currentPage, setCurrentPage] = useState('exploracion') //TODO por defecto debe ser home
    const onExploreClick = () => setCurrentPage('exploracion');

    return(
        currentPage == 'home' ? <Home onExploreClick={onExploreClick}/> : <Exploracion />
    );
}

export default App;