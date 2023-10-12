import { GET_TEMPERAMENTS } from "../Actions/actions-types";

//inicializar el initialState:

let initialState = {
    allDogs: [],
    allTemperaments: [],
}

//Defini el rootReducer:

function rootReducer(state= initialState, action){
    switch (action.type) {
        case GET_TEMPERAMENTS:
            return{
                ...state,
                 allTemperaments: action.payload    
            }
            
            break;
    
        default: return state
            break;
    }

};

export default rootReducer; 