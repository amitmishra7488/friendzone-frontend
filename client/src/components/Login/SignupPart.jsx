import { Box, Button, Text,Flex,chakra, shouldForwardProp } from '@chakra-ui/react'
import React, { useState } from 'react'
import { store } from '../Redux/Store';
import { toggleLogin } from '../Redux/Actions/userAction';
import { useDispatch } from 'react-redux';
import {motion, isValidMotionProp} from "framer-motion"
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

// const controls = useDragControls()

export default function SignupPart() {
    const [toggle, setToggle] = useState(false);
    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
      });
   
    
    
    




    return (
        <>
            {toggle ?
                <ChakraBox className='formContainer'  animate={{y:0}} initial={{y:-350}} transition='0.5s' >
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
                        as={motion.div}
                        whileHover={{
                            scale: 1.1,
                        }}
                            _hover={{
                                background: "transparent",
                                color: "teal.500",
                                border: "1px solid teal",
                                cursor: "pointer"
                            }}
                            onClick={() => { setToggle(false) }}
                        >SignUp</Button>
                    </Box>
                </ChakraBox>
                :
                // have to fix here some animations
                <Box className='formContainer' as={motion.div} animate={{y:0}} initial={{y:-350}} transition='0.5s'>
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
                            as={motion.div}
                            whileHover={{
                                scale: 1.1,
                            }}
                            _hover={{
                                background: "transparent",
                                color: "teal.500",
                                border: "1px solid teal",
                                cursor: "pointer"
                            }}
                            onClick={() => { setToggle(true) }}
                        >LogIn</Button>
                    </Box>
                </Box>}

        </>
    )
}
