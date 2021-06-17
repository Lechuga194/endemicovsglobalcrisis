import React from 'react';
import './Home.css'
import home_info from '../../static/home_info.png'

function Home({onExploreClick}){

    return(
        <div className="ripple-background">
            <div class="circle xxlarge shade1"></div>
            <div class="circle xlarge shade2"></div>
            <div class="circle large shade3"></div>
            <div class="circle mediun shade4"></div>
            <div class="circle small shade5"></div>
            <div class="splashscreen">
                <div class="titulo">
                    <p id="subtitulo">Exposición</p>
                    <p id="maintitle">Endémico vs Global: Crisis</p>
                    <p id="texto">Reprehenderit voluptate nulla laboris Lorem magna in do. Tempor proident amet aliquip anim laborum ad culpa eu. Excepteur esse mollit elit nostrud nostrud veniam sint laborum qui id id sunt ullamco.</p>
                    <nav>
                        <ul>
                            <li>
                            Iniciar
                            <span></span>
                            </li>
                        </ul>
                        </nav>
                </div>
            </div>
        </div>
    );
}

export default Home;