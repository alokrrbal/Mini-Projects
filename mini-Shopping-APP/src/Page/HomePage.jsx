import React from 'react'
import styled from 'styled-components'
import { ProductList } from '../Component/ProductList'
import SIdeBar from '../Component/SIdeBar'

export const HomePage = () => {
  return (
    <DIV>
      <div className='sidebar'><SIdeBar /></div>
      <div className='prolist'><ProductList /></div>
    </DIV>
  )
}


const DIV = styled.div`
  display: flex;
  margin: auto;
  .sidebar{
    width: 14%;
    border: 1px solid teal;
    height: 300px;
    margin-top: 30px;
    margin-left: 3%;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 20px;
    text-align: start;
    padding-left: 20px;
  }
  .prolist{
    width: 90%;
    margin: auto;
  }
`