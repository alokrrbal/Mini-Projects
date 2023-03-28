import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Redux/productReducer/action'
import { Productcard } from './Productcard'
import { Spinner } from '@chakra-ui/react'
import styled from 'styled-components'
import { useLocation, useSearchParams } from 'react-router-dom'

export const ProductList = () => {
    const [searchParams] = useSearchParams()
    // console.log(searchParams.getAll("category"))
//   console.log (searchParams.get("order"))

    const dispatch = useDispatch()
    const [update , setUpdate] = useState(false)

    const {isLoading ,product} = useSelector(store=>{
        return(store.productReducer)
    })

    const location = useLocation()
    // console.log(location)
    let objParam = {
        params:{
            gender:searchParams.getAll("category"),
            _order:searchParams.get("order"),
            _sort:searchParams.get("order") && "price"
        }

    }

useEffect(()=>{


    dispatch(getProduct(objParam))

},[location.search , update])

  return (
    <DIV>

        {isLoading && <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        /> }


        {product.length > 0 && product.map((itm)=>(
            <Productcard key={itm.id} {...itm} update={setUpdate} />
        ))}
    </DIV>
  )
}


const DIV =styled.div`
    border: 1px solid teal;
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    margin-top: 30px;
    border-radius: 30px;
    margin-bottom: 30px;
`







