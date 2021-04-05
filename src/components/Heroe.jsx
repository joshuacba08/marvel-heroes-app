import React from 'react'
import { NavLink } from 'react-router-dom'

const Heroe = ({ id, name, image }) => {
    return (
        <div className="heroe-card">
            <img src={image} alt={name} />
            <NavLink to={`/heroe/${id}`}>
                <p className="heroe-card__name">{name}</p>
            </NavLink>
        </div>
    )
}

export default Heroe
