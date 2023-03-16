import React from 'react'
import { Route , Routes } from 'react-router-dom'
import { Admin } from './Admin'
import { HomePage } from './HomePage'
import { Login } from './Login'
import { PrivateRoute } from '../Component/PrivateRoute'
import { EditProduct } from './EditProduct'
import CartPage from './CartPage'

export const AllRoutes = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path="/login" element={<Login/>} />
            <Route path='/admin' element={<PrivateRoute><Admin/></PrivateRoute>}/>
            <Route path='/cart' element={ <CartPage /> }></Route>
            <Route path='/edit/:id' element={<PrivateRoute><EditProduct/></PrivateRoute>}></Route>
            <Route path='*' element={<h1>404 ERROR PAGE NOT FOUND</h1>}/>
         </Routes>
    </div>
  )
}
