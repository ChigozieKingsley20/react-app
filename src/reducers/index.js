import countReducer from "./countReducer";
import { combineReducers } from "redux";


const allReducer = combineReducers({
    counter: countReducer
})

export default allReducer;