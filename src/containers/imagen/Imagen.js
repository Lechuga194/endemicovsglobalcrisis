import React, {useState, useEffect} from 'react';

function Imagen({source}) {
    return(
        <div>
            <img src={source}></img>
        </div>
    );
}

export default Imagen;