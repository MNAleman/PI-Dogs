import React from 'react'
import './card.style.css'


const Card = ({ name, temperament, weight, image }) => {
    return (
        <div className='card-cont'>
            <div className='card-title-cont'>
                <h4>{name}</h4>
            </div>
            <div className='card-info-cont'>
                <h5>Temperament:{temperament}</h5>
                <h5>Weight: {weight.metric} Kg</h5>
                <div className='card-img-cont'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card