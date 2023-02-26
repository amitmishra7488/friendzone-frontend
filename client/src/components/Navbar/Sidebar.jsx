import logo from '../../images/logo2.png'
import "./sidebar.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs"
import { GrHomeRounded } from 'react-icons/gr';
import { GoDiffAdded } from 'react-icons/go';
import {FiLogOut} from 'react-icons/fi'
import { Box } from "@chakra-ui/react"
import Cookies from 'universal-cookie'


import { IoPersonOutline } from 'react-icons/io5'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,Input,FormLabel,
  } from '@chakra-ui/react'
  import axios from 'axios'
import { useContext } from 'react';
import { authContext } from '../../context/Context.auth';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cookies = new Cookies();
    const {setPostArray,postArray}=useContext(authContext);
    const[postLink,setPostLink] = useState();
    const[caption,setCaption] = useState();


    const createPost = async (caption,postLink) => {

        try {
            const res = await axios.post('https://friendzone-backend-5d8r.vercel.app/post/create',
            {
                caption:caption,
                image:postLink,
            }, {
                headers: {
                    authorization: cookies.get('token')
                }
            })
            console.log(res.data)
            setPostArray([...postArray,res.data]);

        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(caption!=="" && postLink!==""){
            createPost(caption,postLink);
        }
        else{
            alert("Please enter a valid details");
        }

        

        setIsOpen(false);
    }
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
                    <Box className="sidebar-nav-item">
                        <GoDiffAdded className="sidebar-icon" />
                        <span className="sidebar-nav-text" onClick={() => setIsOpen(true)}>Create Post</span>
                    </Box>
                    <Link to="/profile" className="sidebar-nav-item">
                        <IoPersonOutline className="sidebar-icon" />
                        <span className="sidebar-nav-text" >Profile</span>
                    </Link >
                    <Link to="/login" className="sidebar-nav-item">
                        <FiLogOut className="sidebar-icon" />
                        <span className="sidebar-nav-text" >Logout</span>
                    </Link >
                </div>

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(2px) hue-rotate(30deg)' />
                <ModalContent>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit}>
                        <ModalBody>
                        <FormControl >
                                <FormLabel>Add Caption</FormLabel>
                                <Input
                                    type="text"
                                    value={caption}
                                    onChange={(event) => setCaption(event.target.value)}
                                />
                            </FormControl>
                            
                            <FormControl>
                                <FormLabel>Add Post Link</FormLabel>
                                <Input
                                    type="text"
                                    value={postLink}
                                    onChange={(event) => setPostLink(event.target.value)}
                                />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="ghost" mr={3} onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button colorScheme="blue" type="submit">
                                Save
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
            </Box>
             
    );
};

export default Sidebar;


