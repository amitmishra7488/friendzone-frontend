import React ,{useState}from 'react'
import { Box, Flex, FormControl, Text, FormHelperText, FormLabel, Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import logo from "../../images/logo.png"
import {AiFillEye} from "react-icons/ai"
import {chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

export default function Signupform() {
    // const FormControl = chakra(motion.div, {
    //     shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    //   });
    const initialState = { email: "", password: "",username: ""}
    const [input, setInput] = useState(initialState)

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(!show)
    return (
        <FormControl display="flex" flexDirection="column" gap={2} mt="10%" m="auto" >
            <Box width="60%" m="auto" cursor="pointer" ><img src={logo} alt="logo" /></Box>
            <Box>
                <FormLabel>UserName</FormLabel>
                <Input color="teal" focusBorderColor='teal.500' type='text' placeholder='Enter Username' name="username" onChange={handleInputChange} />
                {/* <FormHelperText>
                    Enter your unique username
                </FormHelperText> */}
            </Box>
            <Box>
                <FormLabel>Email</FormLabel>
                <Input color="teal" focusBorderColor='teal.500' type='email' placeholder='Enter Email' name="email" onChange={handleInputChange} />
                {/* <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
                </FormHelperText> */}
            </Box>
            <Box>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        focusBorderColor='teal.500'
                        color="teal"
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        name="password"
                        onChange={handleInputChange} />
                    <InputRightElement width='4.5rem'>
                        <AiFillEye onClick={handleShow} size={30} cursor="pointer" />
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        focusBorderColor='teal.500'
                        color="teal"
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Confirm password'
                         />
                    <InputRightElement width='4.5rem'>
                        <AiFillEye onClick={handleShow} size={30} cursor="pointer" />
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Button className='signup-part' as={motion.div}
                        whileHover={{
                            scale: 1.1,
                        }} color="#fff" variant="outline" _hover={{
                // color: "teal.500",
                cursor: "pointer"
                // border: "2px solid teal"
            }} w="100%" onClick={() => console.log(input)}>SignUp</Button>
        </FormControl>
    )
}
