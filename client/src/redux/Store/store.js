import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/reducer.js";
import { composeWithDevtools } from "redux-devtool-extension";

export const store = createStore(
    rootReducer,
    composeWithDevtools(applyMiddleware(thunk))
);