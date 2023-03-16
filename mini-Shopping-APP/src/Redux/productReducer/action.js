import axios from "axios"
import { ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST } from "./actionType"


export const addProduct = (inputProData) => (dispatch) =>{


    dispatch({type:PRODUCT_REQUEST})

    axios.post("http://localhost:6969/products",inputProData)
    .then((res)=>{
        dispatch({type:ADD_PRODUCT_SUCCESS , payload:res.data})
    })
    .catch(()=>dispatch({type:PRODUCT_FAIL}))

}


export const getProduct = (paramObj)=> (dispatch)=>{
    // console.log(paramObj)

    dispatch({type:PRODUCT_REQUEST})

    axios
     .get('http://localhost:6969/products',paramObj)
     .then((res)=>{
        // console.log(res.data)
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
     })
     .catch(()=>{
        dispatch({type:PRODUCT_FAIL})
     })
}