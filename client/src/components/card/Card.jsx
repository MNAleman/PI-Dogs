import React from 'react'
import './card.style.css'
const Card = ({ name, temperament, weight, reference_image_id }) => {
    return (
        <div className='card-cont'>
            <div className='card-title-cont'>
                <h4>{name}</h4>
            </div>
            <div className='card-info-cont'>
                <h5>{temperament}</h5>
                <h5>{weight}</h5>
                <h5>{reference_image_id}</h5>
            </div>
        </div>
    )
}

export default Card