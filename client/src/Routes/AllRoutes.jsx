import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/Homepage/Home'
import Login from '../components/Login/Login'
import Profile from '../components/Profile/Profile'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}/>   
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}
