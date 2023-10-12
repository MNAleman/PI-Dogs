import axios from "axios"
import { GET_TEMPERAMENTS } from "./actions-types"

export function getTemperaments() {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/temperaments/")
             console.log(response)
             dispatch({
                type:GET_TEMPERAMENTS,
                payload: response.data
             })
        } catch (error) {

        }
    }
}

export function postDog(state){
    return async function(dispatch){
        try{
            await axios.post("http://localhost:3001/dogs/", state)
            alert("Raza creada con Exito")

        }catch(error){
            alert(error.response.data.error)

        }
    }
}