import { Box, HStack } from '@chakra-ui/layout'
import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import Post from '../Post/Post'

export default function Home() {
    return (
        <HStack spacing="5%">
            <Box w="25%" float="left">
                <Sidebar />
            </Box>
            <Box w="45%">
                <Box display="flex" flexDirection="column" gap="5%" >
                    <Post />
                </Box>
            </Box>
            <Box>
                {/* <ProfileSuggestion/> */}
            </Box>
        </HStack>
    )
}
