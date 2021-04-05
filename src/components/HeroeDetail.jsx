import React from 'react'

const HeroeDetail = ({heroe}) => {


    return (
        <div className="heroe-detail-container">
            <div className="image-container">
                <img src={`${heroe.results[0].thumbnail.path}.jpg`} alt="" />
            </div>
            <div className="description">
                <p className="heroe-name">{heroe.results[0].name}</p>
                <p className="heroe-description">Description: {heroe.results[0].description}</p>
            </div>
            
            
        </div>
    )
}

export default HeroeDetail
