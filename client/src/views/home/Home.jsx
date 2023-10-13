import React from 'react'
import Cards from '../../components/cards/Cards'
import { useEffect } from 'react'
import { filterDogsAction, getDogs, getTemperaments, orderDogsAction, paginateDogs } from '../../redux/Actions/ations'
import { useDispatch, useSelector } from 'react-redux'
import currentPage from '../../redux/Reducer/reducer'


const Home = () => {

  const dispatch = useDispatch();

  const allDogs = useSelector((state) => state.allDogs)
  const allTemperaments = useSelector((state) => state.allTemperaments)

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [])
  const paginate = (event) => {
    dispatch(paginateDogs(event.target.name));
  }
const filterDogs=(event)=>{
  dispatch(filterDogsAction(event.target.value));
}

const orderDogs=(event)=>{
  dispatch(orderDogsAction(event.target.value));
}



  return (
    <div>
      <div>
        <h4>Filtros/Ordenamientos:</h4>
        <span>Ordenamiento por Raza</span>
        <select onClick={orderDogs}>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>
        <select  onChange= {filterDogs} name="temperamentos">
                    {allTemperaments.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
        </div>
      <div>
        <h4>Paginado:</h4>
        <button name='prev' onClick={paginate}>Prev</button><button name='next' onClick={paginate}>Next</button>
        </div>
      <Cards allDogs={allDogs} />
    </div>
  )
}

export default Home