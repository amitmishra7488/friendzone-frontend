import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, HStack, Text } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip';
import React, { useEffect, useState } from 'react'
import { GrUserSettings } from 'react-icons/gr'
import { Icon, Spinner } from '@chakra-ui/react'
import Cookies from 'universal-cookie'
import axios from 'axios';
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


export default function ProfileDetails() {
    const cookies = new Cookies();
    const [profile, setProfile] = useState({});

    const { isOpen, onOpen, onClose } = useDisclosure()

    const display = async()=>{

        try{
            const res = await axios.get('http://localhost:8080/user/profile',{
                headers: {
                    authorization: cookies.get('token')
                  }
            })
            console.log(cookies.get('token'));
            console.log(res.data);
            setProfile(res.data);
        }
        catch(error){
            console.log(error);
        }
    }
    

    

    useEffect(() => {
        display();
        
    }, [])
    return (
        <Box className='profileMainDiv' >
            {Object.keys(profile).length<=0?<Spinner textAlign="center" size='xl' />
            :<Box className='profileContainer' display="flex" w="60%" m="auto" mt={50}>
                <Box  w='30%'>
                    <Box><Image borderRadius='full' boxSize='75%' border="2px solid #ccc" objectFit='cover' src={ profile.user.dp} alt='profile' /></Box>
                </Box>
                <Box  w='70%'>
                    <Box display="flex" flexDirection="column" >

                        {/* 1st row */}
                        <HStack spacing='4%' ml='20px'mb="2%">
                            <Text>{profile.user.name}</Text>
                            <Button size="sm" onClick={onOpen}>Edit Profile</Button>
                            <Tooltip hasArrow label='user setting' >
                                <Box><Icon as={GrUserSettings} boxSize={25}   /></Box>
                            </Tooltip>   
                        </HStack>



                        <HStack spacing='8%' ml='20px' mb="2%">
                            <Text>26 posts</Text>
                            <Text>{profile.user.followers.length} followers</Text>
                            <Text>{profile.user.following.length} following</Text>
                        </HStack>

                        <Box ml='20px'>
                        <Text p={0} fontSize="20px">{profile.user.name}</Text>
                        <Text p={0}>{profile.user.bio}</Text>

                        </Box>

                    </Box>
                </Box>

            </Box>}

            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Text >
  "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>
    )
}
