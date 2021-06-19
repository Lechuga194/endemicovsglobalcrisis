import React, {useState, useEffect} from 'react';
import Menu_busqueda from '../../containers/menu_busqueda/Menu_busqueda'
import back from '../../static/navbar/back.jpg'
import home from '../../static/navbar/home.jpg'
import menu from '../../static/navbar/menu.jpg'
import styles from './navbar.module.css'

function Navbar({goHome, goBack, changeCreador}){

    const [showMenu, setShowMenu] = useState(false);
    const showSideBar = () => setShowMenu(!showMenu);
    const onCreadorClick = () => {}

    return(
        showMenu ? 
            <nav className={styles.navbarmenu}> 
                <div className={styles.upper}>
                    <img src={back} onClick={goBack}></img>
                    <img src={home} onClick={goHome}></img>    
                    <h3>Endémico vs Global: Crisis</h3>
                    <img src={menu} onClick={showSideBar}></img>
                </div>
                <Menu_busqueda onCreadorClick={onCreadorClick} isSideMenu={true} changeCreador={changeCreador}/>
            </nav> : 
            <nav className={styles.smallnavbar}>
                <img src={back} onClick={goBack}></img>
                <img src={menu} onClick={showSideBar}></img>
                <img src={home} id={styles.home} onClick={goHome}></img>
            </nav>
    );
}

export default Navbar;