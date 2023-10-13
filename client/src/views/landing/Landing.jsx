import React from 'react';
import {Link} from 'react-router-dom';

import './landing.style.css';
function Landing() {
    return (
        <div className="landing-container">
            <h1 className="landing-title">
                Sumérgete en el <span className="highlight-text">Mundo Canino</span>: Un Viaje Fascinante a través de las Razas de Perros. Encuentra tu Compañero Perfecto con nuestra Guía Completa, explorando las Preferencias Caninas y descubriendo Razas Únicas que robarán tu corazón.
            </h1>
            <Link to='/home'>
            <button >Ir a la Página Principal</button>
            </Link>   
        </div>
    );
}

export default Landing;
