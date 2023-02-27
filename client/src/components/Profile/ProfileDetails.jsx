import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, HStack, Text } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip';
import React, { useEffect, useState } from 'react'
import { GrUserSettings } from 'react-icons/gr'
import { Icon, Spinner } from '@chakra-ui/react'
import Cookies from 'universal-cookie'
import axios from 'axios';
import { useToast } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'

export default function ProfileDetails() {
    const cookies = new Cookies();
    const toast = useToast()
    const [profile, setProfile] = useState({});


    const display = async () => {

        try {
            const res = await axios.get('https://friendzone-backend-5d8r.vercel.app/user/profile', {
                headers: {
                    authorization: cookies.get('token')
                }
            })
            console.log(cookies.get('token'));
            // console.log(res.data);
            setProfile(res.data);
            console.log(profile)
        }
        catch (error) {
            console.log(error);
        }

    }

    const [isOpen, setIsOpen] = useState(false);
    const [bio, setBio] = useState("");
    const [dpLink, setDpLink] = useState("");
    const [userName,setUserName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        
        if(bio==="" && dpLink==="" && userName===""){
            alert("please enter specific details");
        }
        else{
            editProfile(bio,dpLink,userName);
        }
        setIsOpen(false);
        toast({
            title: 'Profile Succesfully Updated',
            position:'top',
            status: 'success',
            duration: 4000,
            isClosable: true,
          })

    }

    const editProfile = async (bio,dpLink,userName) => {

        try {
            const res = await axios.put('https://friendzone-backend-5d8r.vercel.app/user/bioDP',
            {
                bio:bio,
                dp:dpLink,
                userName:userName
            }, {
                headers: {
                    authorization: cookies.get('token')
                }
            })
            console.log(cookies.get('token'));
            display();
        }
        catch (error) {
            console.log(error);
        }
    }




    useEffect(() => {
        display();
    }, [])
    return (
        <Box className='profileMainDiv' >
            {Object.keys(profile).length <= 0 ? <Spinner textAlign="center" size='xl' />
                : <Box className='profileContainer' display="flex" w="60%" m="auto" mt={50}>
                    <Box w='30%'>
                        <Box><Image borderRadius='full' boxSize='75%' border="2px solid #ccc" objectFit='cover' src={profile.user.dp} alt='profile' /></Box>
                    </Box>
                    <Box w='70%'>
                        <Box display="flex" flexDirection="column" >

                            {/* 1st row */}
                            <HStack spacing='4%' ml='20px' mb="2%">
                                <Text>{profile.user.userName}</Text>
                                <Tooltip hasArrow label='Edit' >
                                <Button size="sm" onClick={() => setIsOpen(true)}>Edit Profile</Button>
                                </Tooltip>
                                
                                {/* <Tooltip hasArrow label='user setting' >
                                    <Box><Icon as={GrUserSettings} boxSize={25} /></Box>
                                </Tooltip> */}
                            </HStack>



                            <HStack spacing='8%' ml='20px' mb="2%">
                                <Text>{profile.user.posts.length} posts</Text>
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

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(2px) hue-rotate(30deg)' />
                <ModalContent>
                    <ModalHeader>Edit Profile</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit}>
                        <ModalBody>
                        <FormControl id="userName">
                                <FormLabel>Add your userName</FormLabel>
                                <Input
                                    type="text"
                                    value={userName}
                                    onChange={(event) => setUserName(event.target.value)}
                                />
                            </FormControl>
                            <FormControl id="bio">
                                <FormLabel>Add Your Bio</FormLabel>
                                <Input
                                    type="text"
                                    value={bio}
                                    onChange={(event) => setBio(event.target.value)}
                                />
                            </FormControl>
                            <FormControl id="dpLink">
                                <FormLabel>Profile DP Link</FormLabel>
                                <Input
                                    type="text"
                                    value={dpLink}
                                    onChange={(event) => setDpLink(event.target.value)}
                                />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="ghost" mr={3} onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button colorScheme="blue" type="submit">
                                Save
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </Box>
    )
}
