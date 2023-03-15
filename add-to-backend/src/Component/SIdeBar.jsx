import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SIdeBar = () => {

    const [searchParams , setSearchParams] = useSearchParams()
    const preCategory = searchParams.getAll("category")

    const [category , setCategory] = useState(preCategory || [])

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

    useEffect(()=>{

        const params = {
            category
         }

         setSearchParams(params)

    },[category])

  return (
    <div>
        <h3>Filter By</h3>

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
    </div>
  )
}

export default SIdeBar