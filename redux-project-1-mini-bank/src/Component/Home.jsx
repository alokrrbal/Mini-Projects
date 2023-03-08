import "./Home.css"
import { NavLink  , Link} from "react-router-dom"
import { store } from "../Redux/store"
import { useState } from "react"

const Home = ()=>{


    const [render , setRender] = useState(0)
    const {getState , subscribe} = store


    subscribe(()=>{
        setRender(pre=>pre+1)
    })



    return(
        <>
        <div className="home-main-box">
            <div className="home-name"><NavLink to="/"><h1>In Pay</h1></NavLink></div>
            <div className="home-child-box">
                <div className="img-box"><img src="https://pngimg.com/uploads/bank/bank_PNG29.png" alt="" /></div>
                <div><h2 className="c-name">Hey Alok . . .</h2></div>
                <div><h2 className="c-amount">Current Amount - {getState().amount} </h2></div>
                <div className="btn-box">
                <div className="home-btn-1" ><NavLink to="/deposite"><button>Deposite</button></NavLink></div>
                <div className="home-btn-2"> <NavLink to="/withdraw"><button>WIthdraw</button></NavLink></div>
                </div>
            </div>
        </div>


        </>
    )
}

export default Home