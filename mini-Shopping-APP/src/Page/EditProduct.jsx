import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editeProduct } from '../Redux/productReducer/action'
import styled from 'styled-components'

export const EditProduct = () => {
  const navigate = useNavigate()

  const {id} = useParams()
  const {product} = useSelector(store=>store.productReducer)

  const [data , setData] = useState("")
  const dispatch = useDispatch()


  const handelOnCHange = (e)=>{
    const {name,value}  = e.target
    setData((pre)=>{
      return {...pre,[name]:value}
    })
  }


  const handelEdite = (e)=>{

    e.preventDefault()
    dispatch(editeProduct(data,id))
    .then(()=>{
      alert("Product Edited Successfully")
      navigate("/")
    })
    
  }

  useEffect(()=>{

    const data = product.find((el)=>el.id === +id)
    setData(data)
  },[])
  return (
    <div>
      <DIV>
        <h2>EDITE THE PRODUCT HERE</h2>
        <img src={data.image} alt="" />


        <FORM onSubmit={handelEdite}>
            <input type="text" name='image' value={data.image} onChange={handelOnCHange}  />
            <input type="text" name='title' value={data.title} onChange={handelOnCHange}></input>
            <input type="number" name='price' value={data.price} onChange={handelOnCHange}/>
            <input type="text" name='brand' value={data.brand} onChange={handelOnCHange}/>
            <input type="text" name='discount' value={data.discount} onChange={handelOnCHange}/>


            <select  name="gender" value={data.gender} onChange={handelOnCHange} >
                <option value="">Select Gender</option>
                <option value="male">Men</option>
                <option value="female">FEMALE</option>
                <option value="kid">KID</option>
            </select>

            <button type='submit'>EDITE-NOW</button>
        </FORM>
    </DIV>
    </div>
  )
}







const DIV = styled.div`
width:30% ;
margin: auto;;
border: 1px solid grey;
padding: 20px;
background-image: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg" ) ;
margin-top: 20px;
opacity: 80%;
border-radius: 30px;
margin-bottom: 50px;
padding-top: 1px;

img{
  width: 30%;
}
input{
    width: 80%;
    height: 40px;
    font-size: large;
}

button {
    width: 40%;
    color: white;
    background-color: #008000ea;
    border: 0px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
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