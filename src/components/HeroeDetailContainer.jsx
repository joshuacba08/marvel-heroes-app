import React, { useEffect, useState } from 'react';
import { getHeroesById } from '../helpers/getHeroesById';
import HeroeDetail from './HeroeDetail';


const HeroeDetailContainer = ({ id }) => {

    const [heroe, setHeroe] = useState(null)

    useEffect(() => {
        getHeroesById(id).then(res => setHeroe(res))
    }, [id])

    console.log(heroe);

    return (
        <article className="heroe-container">

            <div className="heroe-detail">
                {
                    heroe ? <HeroeDetail heroe={heroe} /> : <p className="loading">Loading...</p>
                }
            </div>

        </article>
    )
}

export default HeroeDetailContainer
