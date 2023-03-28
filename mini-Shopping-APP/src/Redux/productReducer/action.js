import axios from "axios"
import { ADD_PRODUCT_SUCCESS, ADD_TO_CART_SUCCESS, EDITE_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST } from "./actionType"


export const addProduct = (inputProData) => (dispatch) =>{


    dispatch({type:PRODUCT_REQUEST})

    return axios.post(`https://jolly-hose-hen.cyclic.app/products`,inputProData)
    .then((res)=>{
        console.log(res)
        dispatch({type:ADD_PRODUCT_SUCCESS , payload:res.data})
    })
    .catch(()=>dispatch({type:PRODUCT_FAIL}))

}


export const getProduct = (paramObj)=> (dispatch)=>{
    // console.log(paramObj)

    dispatch({type:PRODUCT_REQUEST})

    axios
     .get('https://jolly-hose-hen.cyclic.app/products',paramObj)
    //  .get('http://localhost:6969/products',paramObj)
     .then((res)=>{
        console.log(res.data)
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
     })
     .catch(()=>{
        dispatch({type:PRODUCT_FAIL})
     })
}

export const addToCart = (id) => (dispatch) =>{


    axios.get(`https://jolly-hose-hen.cyclic.app/products/${id}`)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:ADD_TO_CART_SUCCESS,payload:res.data})
    })
}


export const editeProduct = (data,id) =>(dispatch)=>{

    return axios.patch(`https://jolly-hose-hen.cyclic.app/products/${id}`,data)
    .then(()=>{
        dispatch({type:EDITE_SUCCESS})
    })
}

export const deleteProduct = (id)=> {
     axios.delete(`https://jolly-hose-hen.cyclic.app/products/${id}`)
}