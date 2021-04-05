import React from 'react'
import { NavLink } from 'react-router-dom';

import Logo from '../assets/images/logo_marvel.png';


const BarNav = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={Logo} alt=""/>
            </div>
            <nav>
                <ul className="nav-container">
                    <li>
                        <NavLink exact to="/"
                                 activeClassName="selected"
                                 className="no-selected"
                        >HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search"
                                 activeClassName="selected"
                                 className="no-selected"
                        >SEARCH</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">FAVORITES</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default BarNav
