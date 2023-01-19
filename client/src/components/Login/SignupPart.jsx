import { Box, Button, Text,Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { store } from '../Redux/Store';
import { toggleLogin } from '../Redux/Actions/userAction';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function SignupPart() {
    const [toggle, setToggle] = useState(false);
    // const dispatch = useDispatch();
    // var storeData= store.getState();
    // console.log(storeData)




    return (
        <>
            {toggle ?
                <Box className='formContainer'>
                    <Box className="form"bg="#fff" w="55%" p={30}>
                        <LoginForm />
                    </Box>
                    <Box className="signup-part" textAlign="center" display="flex" flexDirection="column" alignItems="center" pt="20%" w="45%" gap={2}>
                        <Text
                            fontSize="30px"
                            fontWeight="bold"
                        >Welcome to login</Text>
                        <Text
                            fontSize="15px"
                            fontWeight="medium"
                        >Don't have an Account ?</Text>
                        <Button borderRadius="20px" variant="outline"
                            _hover={{
                                background: "transparent",
                                color: "teal.500",
                                border: "1px solid teal"
                            }}
                            onClick={() => { setToggle(false) }}
                        >SignUp</Button>
                    </Box>
                </Box>
                :
                <Box className='formContainer'>
                    <Box className="form" bg="#fff" w="55%" p={30}>
                        <SignupForm />
                    </Box>
                    <Box className="signup-part" textAlign="center" display="flex" flexDirection="column" alignItems="center" pt="20%" w="45%" gap={2}>
                        <Text
                            fontSize="30px"
                            fontWeight="bold"
                        >Welcome to SignUp</Text>
                        <Text
                            fontSize="15px"
                            fontWeight="medium"
                        >You have an Account ?</Text>
                        <Button borderRadius="20px" variant="outline"
                            _hover={{
                                background: "transparent",
                                color: "teal.500",
                                border: "1px solid teal"
                            }}
                            onClick={() => { setToggle(true) }}
                        >LogIn</Button>
                    </Box>
                </Box>}

        </>
    )
}
