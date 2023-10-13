//rafce
import React from 'react'
import Card from '../card/Card'

import './cards.style.css'
const Cards = ({allDogs}) => {
  return (
    <div className='cards-cont'>
      {allDogs.map(dog => <Card name={dog.name}temperament ={dog.temperament}weight={dog.weight}image={dog.image}/>)}
    </div>
  )
}

export default Cards


//weight, reference_image_id