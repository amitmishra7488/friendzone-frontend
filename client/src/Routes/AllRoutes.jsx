import React, { useContext, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Cookies from 'universal-cookie'
import Home from '../components/Homepage/Home'
import Login from '../components/Login/Login'
import Profile from '../components/Profile/Profile'
import { authContext } from '../context/Context.auth'

export default function AllRoutes() {
    const cookies = new Cookies();
    const token= cookies.get('token');
    const {isLoggedIn,setIsLoggedIn}= useContext(authContext);
    console.log(isLoggedIn,token);
    useEffect(()=>{
if(token){
    setIsLoggedIn(true);
}
    },[])
    return (
        <Routes>
            <Route path="/" element={isLoggedIn?<Home />:<Login/>} />
            <Route path="/login" element={<Login />}/>   
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}
