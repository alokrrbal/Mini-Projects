import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

export const PrivateRoute = ({children}) =>{

    const {isAuth} = useSelector(store=>store.authReducer)

    const location = useLocation()

    return isAuth?children:<Navigate to="/login" state={location.pathname} replace></Navigate>

}