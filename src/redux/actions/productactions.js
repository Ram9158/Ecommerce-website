import { ActtionTypes } from "../constants/actionypes";

export const setproduct = (product)=>{
        return{
            type: ActtionTypes.SET_PRODUCT,
            payload:product
        }
};

export const selectedproduct = (products)=>{
    return{
        type: ActtionTypes.SELECTED_PRODUCT,
        payload:products
    }
};