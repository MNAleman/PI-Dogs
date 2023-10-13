import { FILTER, GET_DOGS, GET_TEMPERAMENTS, ORDER, PAGINATE } from "../Actions/actions-types";

//inicializar el initialState:

let initialState = {
    allDogs: [],
    allTemperaments: [],
    allDogsBackUP: [],
    currentPage: 0,
    dogsFiltered: [],
    filter: false
};

//Defini el rootReducer:

function rootReducer(state = initialState, action) {
    const ITEMS_PER_PAGE = 5
    switch (action.type) {
        case GET_TEMPERAMENTS:
            return {
                ...state,
                allTemperaments: action.payload
            };

        case GET_DOGS:
            return {
                ...state,
                allDogs: [...action.payload].splice(0, ITEMS_PER_PAGE),
                allDogsBackUP: action.payload
            };
        case PAGINATE:
            const next_page = state.currentPage + 1;
            const prev_page = state.currentPage - 1;
            const firstIndex = action.payload === "next" ? next_page * ITEMS_PER_PAGE : prev_page * ITEMS_PER_PAGE

            if (state.filter) {
                if (action.payload === "next" && firstIndex >= state.dogsFiltered.length) return state;
                else if (action.payload === "prev" && prev_page < 0) return state
                return {
                    ...state,
                    allDogs: [...state.dogsFiltered].splice(firstIndex, ITEMS_PER_PAGE),
                    currentPage: action.payload === "next" ? next_page : prev_page
                }
            }


            if (action.payload === "next" && firstIndex >= state.allDogsBackUP.length) return state;
            else if (action.payload === "prev" && prev_page < 0) return state

            return {
                ...state,
                allDogs: [...state.allDogsBackUP].splice(firstIndex, ITEMS_PER_PAGE),
                currentPage: action.payload === "next" ? next_page : prev_page
            }


        case FILTER:
            const filterByTemperament = [...state.allDogsBackUP].filter((d) => d.temperamentos.includes(action.payload))

            return {
                ...state,
                allDogs: filterByTemperament.splice(0, ITEMS_PER_PAGE),
                dogsFiltered: filterByTemperament,
                filter: true
            }

        case ORDER:
            let orderByName = []

            if (action.payload === "AZ") {
                orderByName = [...state.allDogsBackUP].sort((prev, next) => {
                    if (prev.name.toLowerCase() > next.name.toLowerCase()) return 1;
                    if (prev.name.toLowerCase() < next.name.toLowerCase()) return -1;
                    return 0;
                })
            }
            if (action.payload === "ZA") {
                orderByName = [...state.allDogsBackUP].sort((prev, next) => {
                    if (prev.name.toLowerCase() > next.name.toLowerCase()) return -1;
                    if (prev.name.toLowerCase() < next.name.toLowerCase()) return 1;
                    return 0;
                })
            }

            return {
                ...state,
                allDogs: [...orderByName].splice(0, ITEMS_PER_PAGE),
                allDogsBackUP: orderByName,
                currentPage: 0
            }


        default: return state
            break;
    }

};

export default rootReducer; 