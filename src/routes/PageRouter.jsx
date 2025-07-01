import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import PaymentHistory from '../pages/PaymentHistory'

function PageRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path='/history' element={<PaymentHistory />} />
        </Routes>
    </Router>
  )
}

export default PageRouter