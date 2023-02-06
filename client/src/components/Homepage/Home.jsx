import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import Post from '../Post/Post'
import Story from '../Story/Story'
import Suggestions from '../Suggestion/Suggestions'

export default function Home() {
    return (
        <Flex >
            <Box w="25%" mr="5%">
                <Sidebar />
            </Box>
            <Box w="40%" mr="2%" mt="2%">
                <Box display="flex" flexDirection="column" >
                    <Story/>
                    <Post />
                </Box>
            </Box>
            <Box >
                <Suggestions/>
            </Box>
        </Flex>
    )
}
