import React ,{useState}from 'react'
import { Box, FormControl, FormHelperText, FormLabel, Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import logo from "../../images/logo.png"
import {AiFillEye} from "react-icons/ai"
import { motion } from 'framer-motion'
import axios from 'axios'

import Cookies from  'universal-cookie'


export default function LoginForm() {
    const cookies = new Cookies();

    const initialState = { email: "", password: "" }
    const [input, setInput] = useState(initialState)

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const display= async(email,password)=>{
        try{
            const res = await axios.post('http://localhost:8080/user/login',{
                email: email,
                password: password
            })
            console.log(res.data)
            cookies.set('token',res.data.token,{
                path:'/',
                maxAge:24*60*60
            })
            
            setTimeout(()=>{
                console.log(cookies.get('token'))
            },1000);
        }
        catch(error){
            console.log(error);
        }
    }

    const handleSubmit = () =>{
        const { email, password} = input;
        display(email, password);
    }


    const [show, setShow] = useState(false)
    const handleShow = () => setShow(!show)
    return (
        <FormControl display="flex" flexDirection="column" gap={5} mt="10%" m="auto"  >
            <Box width="60%" m="auto" cursor="pointer" ><img src={logo} alt="logo" /></Box>
            <Box>
                <FormLabel>Email</FormLabel>
                <Input color="teal" focusBorderColor='teal.500' type='email' name="email" onChange={handleInputChange} />
                <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
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
            <Button className='signup-part' as={motion.div}
                        whileHover={{
                            scale: 1.1,
                        }} variant="outline" _hover={{
                // color: "teal.500",
                cursor: "pointer"
                // border: "2px solid teal"
            }} w="100%" onClick={handleSubmit}>LogIn</Button>
        </FormControl>
    )
}
