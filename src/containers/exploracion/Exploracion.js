import React, {useState, useEffect} from 'react';
import Menu_busqueda from '../menu_busqueda/Menu_busqueda'
import Navbar from '../../components/navbar/Navbar'
import Image_container from '../image_container/Image_container'
import styles from './exploracion.module.css'
import exploracion_img from '../../static/exploracion.jpg'

const texto = "Proident aliquip nulla aute cillum et deserunt veniam. Dolore irure elit adipisicing amet nulla ut deserunt cillum. Tempor proident irure consequat excepteur eu consectetur do cillum. Lorem voluptate adipisicing veniam id eu. Culpa incididunt excepteur aliqua consequat labore pariatur culpa do id. Incididunt id exercitation elit dolor velit aliqua magna sunt excepteur do irure velit officia dolor. Incididunt consequat magna tempor sunt veniam nisi occaecat laborum ut nisi pariatur. Reprehenderit cillum incididunt elit voluptate. Consectetur reprehenderit velit pariatur veniam magna culpa. Irure occaecat non tempor et cupidatat commodo duis nulla magna nostrud sunt ea in. Culpa sunt do culpa do minim sit pariatur.";
const listofimages = [
    {
        src: 'https://images.unsplash.com/photo-1533591917057-a0b77b40de75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJpZGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        src: 'https://images.unsplash.com/photo-1564694457547-6ea79902e0be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByaWRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        src: 'https://images.unsplash.com/photo-1595121351737-27213f0b210f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        src: 'https://images.unsplash.com/photo-1611877605966-fa0927ed4f86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1623851026076-305cfa60f30f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1623936174855-af0b96a7b035?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1623852061757-541cb299e25c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1623850015160-9fac509f02f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1623878992174-592881e9c20f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
]

function Exploracion() {

    const [creador, setCreador] = useState(null);
    const [currentPage, setCurrentPage] = useState('exploracion') //TODO por defecto debe ser exploracion
    const [images, setImages] = useState(listofimages) //Arreglo de imagenes del artista
    
    const onCreadorClick = (creador) => {
        if(creador != null){
            setCreador(creador);
            setCurrentPage('detalles_creador');
        }
    };
    
    const redirect = () => {
        setCurrentPage('exploracion')
    }

    const onExploreClick = () => {
        
    }

    return(
        <>
            {currentPage === 'exploracion' ? 

            <div className={styles.exploracion}>
                <div id={styles.menuexploracion}><Menu_busqueda onCreadorClick={onCreadorClick}/></div>
                <div className={styles.contenido}>
                    <img src={exploracion_img} alt="exploracion_img"></img>
                    <div className={styles.button}><nav onClick={onExploreClick}><ul><li>Iniciar<span></span></li></ul></nav></div>
                </div>
            </div> 

            : 
            <div className="container-detalles-creador">
                <Navbar redirect={redirect}/>
                <div className="detalles-creador">
                    <div className="datos">
                        <h1>Nombre</h1>
                        <h3>Nacionalidad</h3>
                        <p>{texto}</p>
                    </div>
                    <Image_container images={images}/>
                </div>
            </div>}
        </>
    );
}

export default Exploracion;