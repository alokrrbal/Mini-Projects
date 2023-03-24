import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import './Nav.css'
export const NavBar = () => {
  return (
    <DIV>
        
        <Link className="Nlink" to="/">Shopping MINI</Link>
        <Link className="Nlink" to="/cart">CART</Link>
        <Link className="Nlink" to="/admin">ADMIN</Link>
        <Link className="Nlink"to="/login">LOGIN</Link>
    </DIV>
  )
}


const DIV = styled.div`
    
    border: 2px solid teal;
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    margin-top: 23px;
    padding: 20px;
    background-color: #171a26;
    border-radius: 30px;
`;


// const LINKX = styled`
//     color: white;
//     text-align: center;
//     cursor: pointer;
//     margin: 0;
//     color: white;
//     font-size: 18px;
//     font-family: Inter-Bold,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
//     letter-spacing: 0px;
//     line-height: 22px;
//     opacity: 70%;
// `