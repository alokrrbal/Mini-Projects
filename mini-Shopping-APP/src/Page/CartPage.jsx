import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import "./AllCss.css"
 const CartPage = () => {

    const {cartData} = useSelector(store => store.productReducer)
    


  return (
    <div>
        <h1 className='cWel'>HEY WELCOME TO CART PAGE !</h1>
        <div className='mainCartDiv'>
            {cartData.length > 0 ?
            
            cartData.map((itm)=>(
                <DIV key={itm.id}>
                    <img src={itm.image} alt="" />
                    <h3>{itm.title}</h3>
                    <p>Brand-: {itm.brand}</p>
                    <p>Price  ₹{itm.price}</p>
                    <p>{itm.discount}</p>
                    <p>Category-: {itm.gender}</p>
                </DIV>
            )):
            <h1 className='noPro'>There Is No Products In Your Cart</h1>
            }
        </div>
    </div>
  )
}
export default CartPage



const DIV = styled.div`
    width: 80%;
    height: auto;
    margin: auto;
    margin: 30px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 20px;
    img{
        width: 40%;
    }
    /* border: 1px solid red; */
    
`
  
