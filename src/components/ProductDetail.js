import React,{useEffect} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import { selectedproduct } from '../redux/actions/productactions';
import { useDispatch,useSelector } from 'react-redux';


const ProductDetail = () => {
    const product = useSelector(state => state.product)
    // const [image,title,description] = product
    console.log(product)
    
    const {productId} = useParams();
    const dispatch = useDispatch()
    // console.log(productId)

   
    const  ProductDetail=async()=>{

        const responce = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log(err)
        })
        dispatch(selectedproduct(responce.data))
    }
    useEffect(() => {
    
        if(productId && productId!=="")ProductDetail();
    }, [productId])
    return (
        <div>
        </div>
    )
}

export default ProductDetail;
