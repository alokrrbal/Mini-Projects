import React from 'react'
import { Route , Routes } from "react-router-dom";
import Home from './Home';
import Withdraw from './Withdraw';
import Deposite from './Deposite';



const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/withdraw' element={<Withdraw />}></Route>
            <Route path='/deposite' element={<Deposite />}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes