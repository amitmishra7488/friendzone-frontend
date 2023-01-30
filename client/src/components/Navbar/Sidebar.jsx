import logo from '../../images/logo2.png'
import "./sidebar.css"
import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs"
import { GrHomeRounded } from 'react-icons/gr';
import { FaRegCompass } from 'react-icons/fa';
import { Box } from "@chakra-ui/react"

import { IoPersonOutline } from 'react-icons/io5'

const Sidebar = () => {
    return (
            <Box className="sidebar">
                <div className="sidebar-header">
                    <img src={logo} className="sidebar-logo" />
                </div>
                <div className="sidebar-search">
                    <BsSearch className="sidebar-icon" />
                    <input type="text" placeholder="Search" className="sidebar-search-input" />
                </div>
                <div className="sidebar-nav">
                    <Link to='/' className="sidebar-nav-item">
                        <GrHomeRounded className="sidebar-icon" />
                        <span className="sidebar-nav-text">Home</span>
                    </Link>
                    <Link to='/explore' className="sidebar-nav-item">
                        <FaRegCompass className="sidebar-icon" />
                        <span className="sidebar-nav-text">Explore</span>
                    </Link>
                    <Link to='/explore' className="sidebar-nav-item">
                        <IoPersonOutline className="sidebar-icon" />
                        <span className="sidebar-nav-text">Profile</span>
                    </Link>
                </div>
            </Box>
             
    );
};

export default Sidebar;


