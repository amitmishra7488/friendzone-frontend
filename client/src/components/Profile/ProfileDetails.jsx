import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, HStack, Text } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip';
import { fontSize, width } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { GrUserSettings } from 'react-icons/gr'
import { Icon, Spinner } from '@chakra-ui/react'



export default function ProfileDetails() {
    const [profile, setProfile] = useState({});
    const profilePic = async () => {
        try {
            const res = await fetch('https://randomuser.me/api/')
            const data = await res.json();
            // console.log(data.results[0]);
            setProfile(data.results[0]);
            
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        profilePic();
        
    }, [])
    return (
        <Box className='profileMainDiv' >
            {Object.keys(profile).length<=0?<Spinner textAlign="center" size='xl' />
            :<Box className='profileContainer' display="flex" w="60%" m="auto" mt={50}>
                <Box  w='30%'>
                    <Box><Image borderRadius='full' boxSize='75%' border="2px solid #ccc" objectFit='cover' src={ profile.picture.large} alt='profile' /></Box>
                </Box>
                <Box  w='70%'>
                    <Box display="flex" flexDirection="column" >

                        {/* 1st row */}
                        <HStack spacing='4%' ml='20px'mb="2%">
                            <Text>coolamitmishra</Text>
                            <Button size="sm">Edit Profile</Button>
                            <Tooltip hasArrow label='user setting' >
                                <Box><Icon as={GrUserSettings} boxSize={25}   /></Box>
                            </Tooltip>   
                        </HStack>



                        <HStack spacing='8%' ml='20px' mb="2%">
                            <Text>26 posts</Text>
                            <Text>1k followers</Text>
                            <Text>26 following</Text>
                        </HStack>

                        <Box ml='20px'>
                        <Text p={0} fontSize="20px">Akshay Kumar</Text>
                        <Text p={0}>❤️❤️Jai Mata Di❤️❤️<br />
                            🚩🚩 जय श्री राम 🚩🚩<br />
                            🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳
                        </Text>


                        </Box>

                    </Box>
                </Box>
            </Box>}
        </Box>
    )
}
