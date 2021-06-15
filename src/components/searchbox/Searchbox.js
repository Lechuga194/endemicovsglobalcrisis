import React from 'react';

function Searchbox({onChangeSearch}) {
    return(
        <input type="search" placeholder="Buscar" onChange={onChangeSearch}></input>
    );
}

export default Searchbox;