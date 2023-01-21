import { Box } from '@chakra-ui/layout'
import React from 'react'
import ProfileCard from './ProfileCard'
import ProfileDetails from './ProfileDetails'

export default function Profile() {
  return (
    <Box>
        <ProfileDetails/>
        <ProfileCard/>
    </Box>
  )
}
