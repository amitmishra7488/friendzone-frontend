import { Box,Flex } from '@chakra-ui/layout'
import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import ProfileCard from './ProfileCard'
import ProfileDetails from './ProfileDetails'
import { useMediaQuery } from '@chakra-ui/react'


export default function Profile() {
  const [isLargerThan850] = useMediaQuery('(max-width: 850px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })
  return (
    <Flex>
      <Box w="20%" display={isLargerThan850?"none":"block"}>
          <Sidebar/>
      </Box>
      <Box w={isLargerThan850?"95%":"80%"}m={isLargerThan850?"auto":null}>
          <ProfileDetails/>
          <ProfileCard/>
      </Box>
        
    </Flex>
   
  )
}
