import React, { useState } from 'react'
import { Box, Flex, FormControl, Text, FormHelperText, FormLabel, Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import "./LoginStyle.css"
import ParticlesBg from 'particles-bg'
import SignupPart from './SignupPart'
import {motion, spring} from "framer-motion"

export default function Login() {
    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 10],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        // body: "./img/icon.png", // Whether to render pictures
        // rotate: [0, 20],
        alpha: [0.6, 0],
        scale: [1, 0.1],
        position: "all", // all or center or {x:1,y:1,width:100,height:100}
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
    };
    const [show, setShow] = React.useState(false)
    const handleShow = () => setShow(!show)

    return (
        <Box pt="5%" h="100vh">
            <ParticlesBg type="lines" config={config} bg={true} />
            <SignupPart as={motion.div} animate={{y:0}} initial={{y:100}}></SignupPart>
        </Box>
    )
}
