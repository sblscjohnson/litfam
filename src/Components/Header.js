import React from 'react';
import fireGIF from './../images/fire.gif';

let Header = () => {
    return (
        <header className="App-header">
            <h1 className="title">It's finna be lit, fam</h1>
            <a href='https://youtu.be/dQw4w9WgXcQ' target='_blank'><img className="fire-pic" src={fireGIF} alt="fire" /></a>
        </header>
    )
}

export default Header;