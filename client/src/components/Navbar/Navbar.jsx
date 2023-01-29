import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import "./navbar.css"
import {FiSend} from  "react-icons/fi"
import {FaRegCompass,FaRegHeart} from "react-icons/fa"
import {IoPersonOutline} from 'react-icons/io5'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-left">
                <img src={logo} alt="Instagram logo" className="navbar-logo"/>
            </div>
            <div className="navbar-center">
                <input type="text" placeholder="Search" className="navbar-search-input"/>
            </div>
            <div className="navbar-right">
                <Link to='/'>
                    <FiSend size={25}/>
                </Link>
                <Link to='/explore'>
                    <FaRegCompass size={25}/>
                </Link>
                <Link to='/messages'>
                    <FaRegHeart size={25}/>
                </Link>
                <Link to='/profile'>
                    <IoPersonOutline size={25}/>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
