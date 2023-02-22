import { Box,Flex } from '@chakra-ui/layout'
import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import ProfileCard from './ProfileCard'
import ProfileDetails from './ProfileDetails'

export default function Profile() {
  return (
    <Flex>
      <Box w="20%" >
          <Sidebar/>
      </Box>
      <Box w="80%">
          <ProfileDetails/>
          <ProfileCard/>
      </Box>
        
    </Flex>
   
  )
}
