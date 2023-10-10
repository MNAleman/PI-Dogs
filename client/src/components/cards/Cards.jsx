//rafce
import React from 'react'
import Card from '../card/Card'

import './cards.style.css'
const Cards = ({allDogs}) => {
  return (
    <div>
      {allDogs.map(d => <Card name={d.name}temperament ={d.temperament}weight={d.weight}/>)}
    </div>
  )
}

export default Cards


//weight, reference_image_id