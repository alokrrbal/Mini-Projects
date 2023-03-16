import React, { useState } from 'react'
import { login } from '../Redux/authReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import "./AllCss.css"
import { useLocation, useNavigate } from 'react-router-dom'


export const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location.state)

    const dispatch = useDispatch()
    const {isLoading,isAuth,token} = useSelector(store=>{
        // console.log(store.authReducer)
        return(store.authReducer)
    })


    const initialInput={
        email:"",
        password:""
    }

    const [adInput , setAdInput] = useState(initialInput)


    const handelOnChange=(e)=>{
        const {name,value}=e.target
        setAdInput(pre=>{
            return {...pre , [name]:value}
        })
    }


    const handelSubmit=(e)=>{
        e.preventDefault()
        dispatch(login(adInput)).then(()=>{
            navigate(location.state , {replace:true})
        })
        
        setAdInput(initialInput)
    }
  return (
    <DIV>
        <h2>WELCOME TO ADMIN LOGIN PAGE</h2>
        {isAuth?<h5 className='logOn'>Login Success-TOKEN-{token.token}</h5>:<h5 className='noLog'>Please Login Now</h5>}
        <form onSubmit={handelSubmit}>
            <label >
                EMAIL-: <br />
                <input type="text" value={adInput.email} name="email" onChange={handelOnChange} placeholder='Enter Your Email' />
            </label>
            <br />
            <br />
            <label >
                PASSWORD-: <br />
                <input type="password" value={adInput.password} name="password" onChange={handelOnChange} placeholder='Enter Your Password'/>
            </label>
            <br />
            <button type='submit'>LOGIN-NOW</button>
        </form>
    </DIV>
  )
}


const DIV = styled.div`
    border: 3px solid teal;
    width: 30%;
    margin: auto;
    margin-top: 40px;
    background-image: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg" ) ;
    background-color: #171a26;
    height: 450px;
    opacity: 96%;
    border-radius: 30px;
    h2{
        color: white;
        opacity: 60%;
        
    }
    label{
        color: white; margin-right: 20px;
    }

    input{
        width: 80%;
        background-color: white;
        margin-top: 20px;
        height: 30px;
        opacity: 70%;
        border-radius: 20px;
        text-align: center;
    }
    form{
        /* border: 1px solid red; */
        margin-top: 10%;
        text-align: start;
        padding-left: 10%;
    }
    button{
        background-color: green;
        color: white;
        font-size: large;
        margin-top: 20px;
        padding: 15px;
        border: 0px;
        border-radius: 20px;
        cursor: pointer;
       text-align: center;
       margin-left: 30%;
    }
`

