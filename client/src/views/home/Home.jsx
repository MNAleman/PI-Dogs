import React from 'react'
import Cards from '../../components/cards/Cards'

const Home = () => {
  
  // realizar la peticion al back y reemplazar allDogs con la info del back
  const allDogs = [
    { name: "Callejero", temperament: "Friendly", weight: "algo pesado" },
    { name: "Ladrador", temperament: "Guardian", weight: "algo pesado" },
    { name: "Pulgoso", temperament: "Hiperactivo", weight: "algo pesado" }
  ]
  return (
    <div>
      <Cards allDogs={allDogs} />
    </div>
  )
}

export default Home