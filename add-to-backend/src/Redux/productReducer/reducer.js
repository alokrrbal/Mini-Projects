import { GET_PRODUCT_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST } from "./actionType"

const initialState = {
    isLoading:false,
    isError:false,
    product:[]
}


export const reducer = (state,{type,payload})=>{

    switch(type){
        case PRODUCT_REQUEST:{
            return{...state,isLoading:true}
        }
        case GET_PRODUCT_SUCCESS:{
            return{...state,isLoading:false}
        }
        case PRODUCT_FAIL:{
            return{...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
}