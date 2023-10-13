import axios from "axios"
import { GET_TEMPERAMENTS, GET_DOGS, PAGINATE, FILTER, ORDER } from "./actions-types"

export function getTemperaments() {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/temperaments/")
            console.log(response)
            dispatch({
                type: GET_TEMPERAMENTS,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function postDog(state) {
    return async function (dispatch) {
        try {
            await axios.post("http://localhost:3001/dogs/", state)
            alert("Raza creada con Exito")

        } catch (error) {
            alert(error.response.data.error)

        }
    }
}

export function getDogs() {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/dogs/")
            console.log(response)
            dispatch({
                type: GET_DOGS,
                payload: response.data
            })
        } catch (error) {

        }
    }
}

export function paginateDogs(order) {
    return async function (dispatch) {
        try {

            dispatch({
                type: PAGINATE,
                payload: order 
            })
        } catch (error) {
            alert(error.response.data.error)

        }
    }
}

export function filterDogsAction(temperament) {
    return async function (dispatch) {
        console.log(temperament)
        try {

            dispatch({
                type: FILTER,
                payload: temperament,
         
            })
        } catch (error) {
          alert(error.response.data.error)

        }
    }
}

export function orderDogsAction(orderAux) {
    return async function (dispatch) {
        console.log(orderAux)
        try {

            dispatch({
                type: ORDER,
                payload: orderAux,
         
            })
        } catch (error) {
          alert(error.response.data.error)

        }
    }
}