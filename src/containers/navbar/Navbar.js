import React, {useState} from 'react';
import Menu_busqueda from '../menu_busqueda/Menu_busqueda'
import back from '../../static/navbar/back.jpg'
import home from '../../static/navbar/home.jpg'
import menu from '../../static/navbar/menu.jpg'
import styles from './navbar.module.css'

function Navbar({goHome, goBack, changeCreador, onSalaClick}){

    const [showMenu, setShowMenu] = useState(false);
    const showSideBar = () => setShowMenu(!showMenu);

    return(
        showMenu ? 
            <nav className={styles.navbarmenu}> 
                <div className={styles.upper}>
                    <img src={back} onClick={goBack} alt="back"></img>
                    <img src={home} onClick={goHome} alt="home"></img>    
                    <h3>Endémico vs Global: Crisis</h3>
                    <img src={menu} onClick={showSideBar} alt="menu"></img>
                </div>
                <Menu_busqueda isSideMenu={true} changeCreador={changeCreador} onSalaClick={onSalaClick}/>
            </nav> : 
            <nav className={styles.smallnavbar}>
                <img src={back} onClick={goBack} alt="back"></img>
                <img src={menu} onClick={showSideBar} alt="menu"></img>
                <img src={home} id={styles.home} onClick={goHome} alt="home"></img>
            </nav>
    );
}

export default Navbar;