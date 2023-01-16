import React, { useState } from 'react'
import { Box, Flex, FormControl, Text, FormHelperText, FormLabel, Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import logo from "../../images/logo.png"
import "./LoginStyle.css"
import ParticlesBg from 'particles-bg'
export default function Login() {
    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        // body: "./img/icon.png", // Whether to render pictures
        // rotate: [0, 20],
        alpha: [0.6, 0],
        scale: [1, 0.1],
        position: "center", // all or center or {x:1,y:1,width:100,height:100}
        color: ["random", "#ff0000"],
        cross: "dead", // cross or bround
        random: 15,  // or null,
        g: 5,    // gravity
        // f: [2, -1], // force
        onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
        }
      };
    const initialState = { email: "", password: "" }
    const [input, setInput] = useState(initialState)

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        // console.log(state)
    };
    const [show, setShow] = React.useState(false)
    const handleShow = () => setShow(!show)

    return (
        <Box p="5%">
            <Flex  m="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" w="70%">
                <Box bg="#fff" w="55%" p={30}>
                    <FormControl display="flex" flexDirection="column" gap={5} mt="10%"  m="auto">
                        <Box width="60%" m="auto" cursor="pointer" ><img src={logo} alt="logo" /></Box>
                        <Box>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' name="email" onChange={handleInputChange} />
                            <FormHelperText>
                                Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        </Box>
                        <Box>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    name="password"
                                    onChange={handleInputChange} />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleShow}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Button     border="1px solid #f35588" bg="#E6626A" w="100%" onClick={() => console.log(input)}>Submit</Button>
                    </FormControl>
                </Box>
                <Box  w="45%" bg="#E6626A" color="#fff">
                    <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" mt="30%" gap={2}>
                        <Text
                         fontSize="30px"
                         fontWeight="bold"
                        
                        >Welcome to login</Text>
                        <Text 
                            fontSize="15px"
                            fontWeight="medium"
                        >Don't have an Account ?</Text>
                        <Button border="1px solid #fff" borderRadius="20px" bg="transparent">SignUp</Button>
                    </Box>
                </Box>


            </Flex>
        </Box>
    )
}
