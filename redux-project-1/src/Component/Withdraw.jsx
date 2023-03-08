import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { store } from '../Redux/store'
import { actionWithdraw } from '../Redux/action'
import "./Home.css"



const WIthdraw = () => {



  const [withAmount , setWithAmount ] = useState (0)

  const {dispatch , getState} = store

  const handelWithOnchange = (e)=>{
    setWithAmount(Number(e.target.value))
  }

  const handelWIthSub = (e)=>{
    e.preventDefault()
    if(getState().amount<withAmount){
      alert ("Dont Have Enough Money")
    }else{
      dispatch(actionWithdraw(withAmount))
      alert (`You are Successfully Withdraw ₹${withAmount} rupees`)
    }
  }


  return (
    <div className="home-main-box">
       <div className="home-name"><NavLink to="/"><h1>In Pay</h1></NavLink></div>

      <div className="home-child-box">
      <div className="img-box"><img src="https://pngimg.com/uploads/bank/bank_PNG29.png" alt="" /></div>

      <form className='formbox' onSubmit={handelWIthSub}>
        <label className='labeltext'>
          Enter WIthdraw Amount <br /> <br /><input type="number" className='inputbox' onChange={handelWithOnchange}/>
        </label>
        <br /> <br />
        <label className='labeltext'> PIN <br /> <br /> <input type="text" /></label>
        <br />
        <br />
        <button className="with-btn-1">WIthdraw</button>
      </form>
      </div>
    </div>
  )
}

export default WIthdraw