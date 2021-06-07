import React, {useState, useEffect} from 'react';
import './Home.css'
import home_info from '../../static/home_info.png'


function Home(){

    return(
        <div class="home">
            <div class="title">
                <h3 id="subtitle">Exposición</h3>
                <h1 id="title">Endémico vs Global: Crisis</h1>
                <div class="presentation">
                    <p id="presentation">Amet exercitation velit qui voluptate id aute sit non aliquip mollit ipsum eiusmod est dolor. Velit non tempor mollit nisi ea commodo cupidatat velit cillum Lorem excepteur. Tempor labore qui pariatur minim eiusmod. Reprehenderit velit reprehenderit velit laboris. Dolor officia tempor enim labore reprehenderit duis laborum consectetur est esse quis. Veniam dolor qui ex anim anim minim quis enim aliquip. In ea sint exercitation aliquip nulla cillum dolor id commodo non laboris.</p>
                </div>
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
                <p id="explorar">Explorar</p>
            </div>
        </div>
    );
}

export default Home;