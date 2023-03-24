import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SIdeBar = () => {

    const [searchParams , setSearchParams] = useSearchParams()
    const preCategory = searchParams.getAll("category")
    const preOrder = searchParams.get("order")

    const [category , setCategory] = useState(preCategory || [])
    const [order , setOrder] = useState( preOrder ||"")

    // console.log(searchParams)


    const handelOnChange = (e)=>{

        let tempCat = [...category]
        const value = e.target.value

        if(category.includes(value)){
            tempCat.splice(tempCat.indexOf(value),1)
        }else{
            tempCat.push(value)
        }
        setCategory(tempCat)
        
    }

    const handelSortChange = (e)=>{
        // console.log(e.target.value)
        setOrder(e.target.value)
    }

    useEffect(()=>{

        const params = {
            category,
         }

         order && setSearchParams(params.order=order)

         setSearchParams(params)

    },[category,order])

  return (
    <div>
        <h3>Filter By Category</h3>

        <div>
            <input type="checkbox" value={"male"} onChange={handelOnChange} checked={category.includes("male")}/>
            <label>MEN</label>
        </div>
        <div>
            <input type="checkbox" value={"female"} onChange={handelOnChange} checked={category.includes("female")}/>
            <label>WOMEN</label>
        </div>
        <div>
            <input type="checkbox" value={"kid"} onChange={handelOnChange} checked={category.includes("kid")} />
            <label>KID</label>
        </div>

        <h3>Sort By Price</h3>

        <div onChange={handelSortChange}>
            <label>Ascending</label>
            <input type="radio" name='order' value={"asc"} defaultChecked={order==="asc"}/>
            <br />
            <label>Descending </label>
            <input type="radio" name='order' value={"desc"} defaultChecked={order==="desc"} />
        </div>
    </div>
  )
}

export default SIdeBar