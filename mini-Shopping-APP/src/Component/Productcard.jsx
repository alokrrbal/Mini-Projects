import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteProduct } from '../Redux/productReducer/action'

export const Productcard = ({id , title , price , image , discount , gender , brand , update}) => {
  const {isAuth} = useSelector(auth => auth.authReducer)
  const navigate = useNavigate()

  const dispatch = useDispatch()


  const handelAddToCart = ()=>{
    dispatch(addToCart(id))
    alert("Product Added Successfully")
  }

  const handelDelete = ()=>{

    if(!isAuth){
      alert("Please Login With Your Admin Credential")
      navigate("/login")
    }else{
      deleteProduct(id)
      alert("Product Deleted Successfully")
      update(pre => !pre)
    }
  }
  return (
    <DIV>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>Brand-: {brand}</p>
        <p>Price  ₹{price}</p>
        <p>{discount}</p>
        <p>Category-: {gender}</p>
        <button className='edBtn'>
          <Link className='edBtnLi' to={`/edit/${id}`}>EDITE</Link>
        </button>
        <br />
        <br />
        <button className='addToC' onClick={handelAddToCart}>ADD TO CART</button>
        <br /> <br />
        <button onClick={handelDelete} className='dltBtn'>Delete Product</button>
    </DIV>
  )
}

const DIV = styled.div`
    width: 90%;
    height: 620px;
    margin: auto;
    margin: 30px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 30px;
    img{
        width: 60%;
    }
    .edBtn{
      background-color: orangered;
      border: 0px;
      height: 30px;
      width: 70px;
      border-radius: 20px;
      opacity: 95%;
    }
    .edBtnLi{
      text-decoration: none;
      color: white;
      font-size: 14px;
      font-family: Inter-Bold,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
      letter-spacing: 0px;
    }
    .addToC{
      background-color: green;
      border: 0px;
      height: 40px;
      color: white;
      font-size: 14px;
      font-family: Inter-Bold,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
      letter-spacing: 0px;
      border-radius: 20px;
      opacity: 95%;
      width: 150px;
      cursor: pointer;
    }
    .dltBtn{
      background-color: red;
      border: 0px;
      height: 30px;
      width: 150px;
      border-radius: 20px;
      opacity: 95%;
      text-decoration: none;
      color: white;
      font-size: 14px;
      font-family: Inter-Bold,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
      letter-spacing: 0px;
      cursor: pointer;
    }
    
`