import axios from "axios"
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actioType"

export const login = (loginData) => (dispatch)=>{
    // console.log(loginData)
    dispatch({type:LOGIN_REQUEST})
    axios.post("https://reqres.in/api/login",loginData)
    .then((res)=>{
        dispatch({type:LOGIN_SUCCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:LOGIN_FAIL})
    })
}