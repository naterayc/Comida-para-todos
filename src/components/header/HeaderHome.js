import React from 'react';
import { Link } from 'react-router-dom';
import './header-home.css'
import logo from '../../img/logo.png';

const HeaderHome = () => {

    return (
        <header className="header">
            <div>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/activities">Actividades</Link>
                    </li>
                    <li>
                        <Link to="">Catálogo</Link>
                    </li>
                    <li>
                        <Link to="/join">Sé parte</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderHome;