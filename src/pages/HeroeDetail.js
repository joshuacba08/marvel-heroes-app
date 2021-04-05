import React from 'react'
import { useParams } from 'react-router';
import HeroeDetailContainer from '../components/HeroeDetailContainer'

const HeroeDetail = () => {

    let { id } = useParams();

    console.log(id);

    return (
        <div>
            <HeroeDetailContainer 
                id={id}
            />
        </div>
    )
}

export default HeroeDetail
