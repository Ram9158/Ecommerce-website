import { ActtionTypes } from "../constants/actionypes";

const initialsState = {
    products:[{
        id:1,
        title:"Rameshwar",
        category:"web-devoloper And Programmer"
    }],
};

export const productReducer =(state =initialsState,{type,payload})=>{
    switch (type) {
        case ActtionTypes.SET_PRODUCT:
            return state
        default:
            return state;
    }
};