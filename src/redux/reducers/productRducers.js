import { ActionTypes } from "../constants/actionypes";

const initialsState = {
    products:[],
};

export const productReducer =(state = initialsState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return {...state,products:payload}
        default:
            return state;
    }
};