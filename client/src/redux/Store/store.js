import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../Reducer/reducer.js";

const composeEnhacer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))); //manejar asincronia





// import { createStore, applyMiddleware, compose} from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from '../Reducer';


// const composeEnhacer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// export const store = createStore(
//     rootReducer,
//     composeEnhacer(applyMiddleware(thunkMiddleware))); //manejar asincronia
