import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'
import "./navbar.css"
import { FiSend } from "react-icons/fi"
import { FaRegCompass } from "react-icons/fa"
import { IoPersonOutline } from 'react-icons/io5'
import { FiLogOut } from 'react-icons/fi'
import { Tooltip } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-left">
                <img src={logo} alt="Instagram logo" className="navbar-logo" />
            </div>
            <div className="navbar-center">
                <input type="text" placeholder="Search" className="navbar-search-input" />
            </div>
            <div className="navbar-right">
                <Link to='/'>
                    <FiSend size={25} />
                </Link>
                <Link to='/'>
                    <FaRegCompass size={25} />
                </Link>
                <Tooltip hasArrow label='profile'>
                <Link to='/profile'>
                    <IoPersonOutline size={25} />
                </Link>
                </Tooltip>
                
                <Tooltip hasArrow label='Logout' bg='red.600'>
                    <Link to='/login'>
                        <FiLogOut size={25} />
                    </Link>
                </Tooltip>


            </div>
        </nav>
    );
};

export default Navbar;
