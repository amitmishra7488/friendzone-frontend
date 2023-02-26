import { Box, Flex } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import Sidebar from '../Navbar/Sidebar'
import Post from '../Post/Post'
import Story from '../Story/Story'
import Suggestions from '../Suggestion/Suggestions'
import { useMediaQuery } from '@chakra-ui/react'
import './Home.css'
export default function Home() {
    const [isLargerThan850] = useMediaQuery('(max-width: 850px)', {
        ssr: true,
        fallback: false, // return false on the server, and re-evaluate on the client side
      })

    return (
        <Flex  className='mainDiv' >
            <Box display={isLargerThan850?"none":"block"} w="25%" mr="5%" className='sideBar'>
                <Sidebar />
            </Box>
            <Box w={isLargerThan850?"90%":"40%"} mr={isLargerThan850?"0":"2%"} m={isLargerThan850?"auto":null} mt="2%" className='postBox'>
                <Box display="flex" flexDirection="column" >
                    <Story/>
                    <Post />
                </Box>
            </Box>
            <Box display={isLargerThan850?"none":"block"} mr={isLargerThan850?"0":"2%"} >
                <Suggestions/>
            </Box>
        </Flex>
    )
}
