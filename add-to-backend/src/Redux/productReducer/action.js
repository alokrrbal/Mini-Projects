import axios from "axios"
import { GET_PRODUCT_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST } from "./actionType"


export const addProduct = (inputProData) => (dispatch) =>{


    dispatch({type:PRODUCT_REQUEST})

    axios.post("http://localhost:6969/products",inputProData)
    .then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS , payload:res.data})
    })
    .catch(()=>dispatch({type:PRODUCT_FAIL}))

}