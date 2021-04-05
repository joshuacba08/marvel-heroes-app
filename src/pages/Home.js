import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeroesList from '../components/HeroesList';

// import './styles/Home.scss';

const Home = () => {

    const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];

    const [value, setValue] = useState('a');

    const handleClick = (e) => {
        setValue(e);
    }

    return (
        <section className="home">
            <h1>¡El mundo está en peligro y necesita tu ayuda!</h1>
            <p>Encuentra a tus héroes favoritos para luchar contra el mal.</p>

            <div className='results-page-container'>
                <ul className="leter-container">
                    {
                        abc.map((leter, index) => {
                            return <li
                                className="leter" 
                                key={index}
                                onClick={() => { handleClick(leter) }}
                                >
                                    {leter}
                                {/* <NavLink to={`/`} activeClassName="selected" className="no-selected">{leter}</NavLink> */}
                            </li>
                        })
                    }
                </ul>

            </div>

            <HeroesList 
                field="nameStartsWith"
                value={value}
            />
        </section>
    )
}

export default Home
