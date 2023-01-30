import { Box, HStack } from '@chakra-ui/layout'
import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import Post from '../Post/Post'

export default function Home() {
    return (
        <Box display="flex" justifyContent="space-between">
            <Box>
                <Sidebar />
            </Box>
            <Box>
                <Post />
            </Box>
        </Box>
    )
}
