import axios from 'axios';
import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import {setproduct} from "../redux/actions/productactions"
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector(state => state)
    // console.log(products);
    const dispatch = useDispatch()

    const fetchrpoducts = async () => {
        const responce = await axios.get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("error" ,err)
            });
        dispatch(setproduct(responce.data));
    }
    useEffect(() => {
        fetchrpoducts()
    }, [])
    console.log("Products:", products)

    
    return (
        <div className="ui grid container " >
            <ProductComponent />
        </div>
    )
}

export default ProductListing

