import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

export const Productcard = ({id , title , price , image , discount , gender , brand , }) => {
  return (
    <DIV>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>Brand-: {brand}</p>
        <p>Price  ₹{price}</p>
        <p>{discount}</p>
        <p>Category-: {gender}</p>
        <button>
          <Link to={`/edit/${id}`}>EDITE</Link>
        </button>
    </DIV>
  )
}

const DIV = styled.div`
    width: 90%;
    height: 550px;
    margin: auto;
    margin: 30px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 30px;
    img{
        width: 60%;
    }
`