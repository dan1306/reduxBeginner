import counterReducer from "./counter";
import loggedReducer from "./islogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer,
    loggedReducer
})

export default allReducers 