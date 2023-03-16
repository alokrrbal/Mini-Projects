import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actioType"


const initialState = {
    isLoading:false,
    isError:false,
    isAuth:false,
    token:""
}

export const reducer = (state=initialState,{type,payload})=>{

    switch (type){
        case LOGIN_REQUEST:{
            return{...state,isLoading:true}
        }
        case LOGIN_SUCCESS:{
            return{...state,isLoading:false,token:payload,isAuth:true}
        }
        case LOGIN_FAIL:{
            return{...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
}