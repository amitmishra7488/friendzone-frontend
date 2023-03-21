import React, { useState } from 'react'
import { Box, FormControl, FormLabel, Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import logo from "../../images/logo.png"
import { AiFillEye } from "react-icons/ai"
import { motion } from 'framer-motion';
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
export default function Signupform() {
    const [loading, setLoading] = useState(false);
    const initialState = { email: "", password: "", confirmPassword: "", username: "" }
    const [input, setInput] = useState(initialState)
    const toast = useToast()

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const display = async (username, email, password) => {

        try {
            const res = await axios.post('https://friendzone-backend-5d8r.vercel.app/user/signup', {
                name: username,
                email: email,
                password: password
            })
            setLoading(false);
            toast({
                title: 'Account Created Successfully ,Login Now!',
                position: 'top',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })


        }
        catch (error) {
            setLoading(false);
            toast({
                title: 'Check Signup Details',
                position: 'top',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

        }
    }

    const handleSubmit = () => {
        const { email, password, confirmPassword, username } = input;
        if (password !== confirmPassword) {
            toast({
                title: 'Passwords do not match',
                position: 'top',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
        else {
            setLoading(true);
            display(username, email, password);
        }
    }


    const [show, setShow] = useState(false)
    const handleShow = () => setShow(!show)
    return (
        
            <Box display="flex" flexDirection="column" gap={2} mt="10%" m="auto" >
                <Box width="60%" m="auto" cursor="pointer" ><img src={logo} alt="logo" /></Box>
                <Box>
                    <FormControl isRequired>
                        <FormLabel>UserName</FormLabel>
                        <Input color="teal" focusBorderColor='teal.500' type='text' placeholder='Enter Username' name="username" onChange={handleInputChange} />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input color="teal" focusBorderColor='teal.500' type='email' placeholder='Enter Email' name="email" onChange={handleInputChange} />
                    </FormControl>

                </Box>
                <Box>

                    <FormLabel>Password</FormLabel>
                    <InputGroup size='md'>
                        <FormControl isRequired>
                            <Input
                                focusBorderColor='teal.500'
                                color="teal"
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                name="password"

                                onChange={handleInputChange} />
                        </FormControl>
                        <InputRightElement width='4.5rem'>
                            <AiFillEye onClick={handleShow} size={30} cursor="pointer" />
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup size='md'>
                        <FormControl isRequired>
                            <Input
                                focusBorderColor='teal.500'
                                color="teal"
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder='Confirm password'

                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <InputRightElement width='4.5rem'>
                            <AiFillEye onClick={handleShow} size={30} cursor="pointer" />
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Button className='signup-part' type='submit' as={motion.div}
                    whileHover={{
                        scale: 1.1,
                    }} color="#fff" variant="outline"
                    _hover={{ cursor: "pointer" }}
                    w="100%" onClick={handleSubmit} >{loading ? <Spinner size="md" /> : "Sign Up"}</Button>
            </Box>
       
    )
}
