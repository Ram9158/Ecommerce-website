import { combineReducers } from "redux";
import { productReducer } from "./productRducers";


export const reducers = combineReducers({
    allProduct:productReducer,
})