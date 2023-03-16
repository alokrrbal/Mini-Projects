import { ADD_PRODUCT_SUCCESS, ADD_TO_CART_SUCCESS, EDITE_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST } from "./actionType"

const initialState = {
    isLoading:false,
    isError:false,
    product:[],
    cartData:[]
}


export const reducer = (state=initialState,{type,payload})=>{

    switch(type){
        case PRODUCT_REQUEST:{
            return{...state,isLoading:true}
        }
        case ADD_PRODUCT_SUCCESS:{
            return{...state,isLoading:false}
        }
        case PRODUCT_FAIL:{
            return{...state,isLoading:false,isError:true}
        }
        case GET_PRODUCT_SUCCESS:{
            return{...state,isLoading:false,product:payload}
        }
        case ADD_TO_CART_SUCCESS:{
            return{...state,cartData:[...state.cartData,payload]}
        }
        case EDITE_SUCCESS:{
            return{...state}
        }
        default:{
            return state
        }
    }
}