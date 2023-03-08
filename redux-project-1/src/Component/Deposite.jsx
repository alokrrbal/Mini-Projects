import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { store } from '../Redux/store'
import { ADD } from '../Redux/actionType'
import { actionDeposite } from '../Redux/action'

import "./Home.css"



const Deposite = () => {


  const {getState , dispatch} = store

  const [depoAmount , setDepoAmount] = useState (0)


  const handelOnchange = (e)=>{
    setDepoAmount(Number(e.target.value))
  }

  const handelSub = (e)=>{
    e.preventDefault()
    dispatch(actionDeposite(depoAmount))
    alert(`You are Successfully Deposite ₹${depoAmount} Rupees`)
  }


  return (
    <div className="home-main-box">
       <div className="home-name"><NavLink to="/"><h1>In Pay</h1></NavLink></div>

      <div className="home-child-box">
      <div className="img-box"><img src="https://pngimg.com/uploads/bank/bank_PNG29.png" alt="" /></div>
      <form className='formbox' onSubmit={handelSub}>
        <label className='labeltext'>
          Enter WIthdraw Amount <br /> <br /><input type="number" className='inputbox' placeholder='Enter Deposite Amount' 
          onChange={handelOnchange}/>
        </label>
        <br /> <br />
        <label className='labeltext'> PIN <br /> <br /> <input type="text" /></label>
        <br />
        <br />
        <button className="depo-btn-1">Deposite</button>
      </form>
      </div>
    </div>
  )
}

export default Deposite