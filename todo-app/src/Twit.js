import React from 'react';
import './App.css';

function Twit(probs){
    return(

        <div className = 'twit'>
            <h3>{probs.name}</h3>
            <p>{probs.message}</p>
            <h3>Number of likes</h3>
        </div>

    );


}

export default Twit;