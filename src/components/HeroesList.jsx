import React from 'react'
import { useFetchHeroes } from '../hooks/useFetchHeroes';
import Heroe from './Heroe';

const HeroesList = ({ field, value }) => {

    const { data: heroes, loading } = useFetchHeroes(value);

    return (
        <article className="heroes-container">

            { loading && <p className="loading">Loading...</p>}
            <div className="card-grid">
                {
                    heroes.map(heroe => (
                        <Heroe
                            key={heroe.id}
                            {...heroe}
                        />
                    ))

                }
            </div>
            
        </article>
    )
}

export default HeroesList
