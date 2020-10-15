import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; //fi es el paquete de feather icons
import '../styles/pages/landing.css';
import {Link} from 'react-router-dom';//Esto sirve para aprovechar los recursos ya recargados y no recargar todo desde cero se usa en vez del tag <a></a> y la propiedad href se intercambia por la propiedad to

import logoImg from '../images/Logo.svg' //logoImg es el nombre que le pusimos al archivo .svg que importamos

function Landing(){
    return (
    <div id="page-landing">
        <div className="content-wrapper">
            <img src={logoImg} alt="Happy"/>
            <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos y mude o dia de muitas crianças</p>
            </main>

            <div className="location">
            <strong>Rio do Sul</strong>
            <span>Santa Catarina</span>
            </div>

            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
            </Link>
        </div>
    </div>
    );
}

export default Landing;