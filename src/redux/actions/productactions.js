import { ActionTypes } from "../constants/actionypes";

export const setproduct = (product)=>{
        return{
            type: ActionTypes.SET_PRODUCT,
            payload:product
        }
};

export const selectedproduct = (products)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload:products
    }
};