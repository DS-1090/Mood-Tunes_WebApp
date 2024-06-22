import './mt_style.css';
import './mt_about.js'
import './mt_app.js'
import React from 'react';


function Navbars(){
    return (
        <div className="navbars">
        <nav>
        <a href="src\mt_app.js">Home</a>
        <a href="src\mt_about.js">About</a>
    </nav>
    </div>
       );
    }
    

export default Navbars;
