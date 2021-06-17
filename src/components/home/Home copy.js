import React from 'react';
import './Home.css'
import home_info from '../../static/home_info.png'

function Home({onExploreClick}){

    return(
        <div class="home">
            <div class="splashscreen">
                <h3>Exposición</h3>
                <h1>Endémico vs Global: Crisis</h1>
                <span id="presentation">Cillum proident excepteur aliquip ex. Voluptate duis duis laboris duis exercitation magna et qui nulla. Aliqua Lorem pariatur eu fugiat dolor ad.

Elit magna incididunt consectetur aliquip laborum enim culpa tempor ea qui ea velit nostrud ex. Laboris eiusmod aute consequat esse sunt laboris duis. Sit duis incididunt amet ea deserunt dolor id laborum nostrud voluptate quis. Adipisicing aliqua consectetur pariatur laboris amet Lorem duis ad. Nostrud occaecat do ad do nostrud dolore.</span>
            </div>







            <div class="info">
                <div id="upper">
                    <div id="left">
                        <p class="subtitle">Información</p>
                        <p>Adipisicing nostrud aliqua velit occaecat irure esse Lorem exercitation sit consequat eiusmod irure do qui. Aute ut consequat velit non dolor pariatur consectetur cillum magna consectetur pariatur aute laboris. Ad consectetur ad voluptate quis pariatur sint tempor pariatur labore ex. Ad eiusmod ut elit do id nostrud reprehenderit duis sit.

Aliqua officia Lorem duis adipisicing esse exercitation commodo elit nulla sunt veniam non laboris. Commodo fugiat ipsum est consequat do minim proident voluptate consequat. Tempor aute do amet occaecat ullamco consectetur ea. Non qui consequat consectetur consequat id cupidatat ut aliqua exercitation officia.</p>
                    </div>
                    <img src={home_info} alt="home_info"></img>
                </div>
                <p id="explorar" onClick={onExploreClick}>Explorar</p>
            </div>
        </div>
    );
}

export default Home;