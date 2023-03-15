import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addProduct } from '../Redux/productReducer/action';

export const Admin = () => {


  const dispatch = useDispatch()

  const initialProduct = {
    title:'',
    price:'',
    image:'',
    discount:'',
    gender:'',
    brand:''
  }


  const [product , setProduct ] = useState(initialProduct);

  const handelOnchange = (e)=>{
    const {name,value} = e.target

    setProduct((pre)=>{
      return {...pre , [name]:value}
    })
  }


  const handelSubmit = (e)=>{
    e.preventDefault()

    dispatch(addProduct(product))

    // console.log(product)
    setProduct(initialProduct)
  }

  return (
    <DIV>
        <h2>Add New Product</h2>


        <FORM onSubmit={handelSubmit}>
            <input type="text" value={product.image} onChange={handelOnchange} name="image"  placeholder='ADD image URL'  />
            <input type="text"  value={product.title} onChange={handelOnchange} name="title"  placeholder='Enter Title' ></input>
            <input type="number" value={product.price} onChange={handelOnchange} name="price" placeholder='Price'/>
            <input type="text" value={product.brand} onChange={handelOnchange} name="brand" placeholder='Brand' />
            <input type="text" value={product.discount} onChange={handelOnchange} name="discount" placeholder='discount' />


            <select value={product.gender} onChange={handelOnchange} name="gender" >
                <option value="">Select Gender</option>
                <option value="male">Men</option>
                <option value="female">FEMALE</option>
                <option value="kid">KID</option>
            </select>

            <button type='submit'>Submit</button>
        </FORM>
    </DIV>
  )
}








const DIV = styled.div`
width:300px ;
margin: auto;
margin-top: 10px;

border: 1px solid grey;
padding: 20px;



input{
    width: 80%;
    height: 50px;
    font-size: large;
}

button {
    width: 40%;
    color: white;
    background-color: #008000ea;
    border: 0px;
    height: 30px;
}

select{
    width: 50%;
    height: 35px;
    font-size: large;
}
`;

const FORM = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

`;