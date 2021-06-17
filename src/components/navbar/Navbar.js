import React, {useState, useEffect} from 'react';
import Menu_busqueda from '../../containers/menu_busqueda/Menu_busqueda'
import './navbar.css'
import back from '../../static/navbar/back.jpg'
import home from '../../static/navbar/home.jpg'
import menu from '../../static/navbar/menu.jpg'

function Navbar({redirect}){

    const [showMenu, setShowMenu] = useState(false);
    const showSideBar = () => setShowMenu(!showMenu);

    return(
        showMenu ? 
            <nav className="navbarmenu"> 
                <div className="upper">
                    <img src={back} onClick={redirect}></img>
                    <img src={home}></img>    
                    <h3>Endémico vs Global: Crisis</h3>
                    <img src={menu} onClick={showSideBar}></img>
                </div>
                <Menu_busqueda />
            </nav> : 
            <nav className="navbar">
                <img src={menu} onClick={showSideBar}></img>
                <img src={back} onClick={redirect}></img>
                <img src={home}></img>
            </nav>
    );
}

export default Navbar;