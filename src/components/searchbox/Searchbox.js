import React from 'react';

//Estaticos
import './searchbox.css'
import icon_search from '../../static/icon_search.png'

function Searchbox({onChangeSearch}) {
    return(
        <div className="searchbox">
            <div></div>
            <img src={icon_search} alt=""></img>
            <input type="search" placeholder="Buscar" onChange={onChangeSearch}></input>
        </div>
    );
}

export default Searchbox;