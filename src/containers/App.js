import React, {useState} from 'react';
import Home from '../components/home/Home'
import Exploracion from './exploracion/Exploracion'

//Statics
import './app.css'

function App() {
    const [currentPage, setCurrentPage] = useState('home')
    const onExploreClick = () => setCurrentPage('exploracion');
    const goHome = () => setCurrentPage('home')

    fetch('https://endemicovsglobalcrisis.herokuapp.com/wake')
    .then(data => console.log("awake!"))

    return(
        currentPage === 'home' ? <Home onExploreClick={onExploreClick}/> : <Exploracion goHome={goHome}/>
    );
}

export default App;