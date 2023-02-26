import React, { useEffect, useState } from 'react'

import { Box, Button, Image, Text, textDecoration  } from '@chakra-ui/react'
import PostLoading from '../PostLoading/PostLoading';
import {SlUserFollow} from 'react-icons/sl'
import {BiUser} from 'react-icons/bi'
import {motion } from "framer-motion";
import { userProfile } from '../Redux/Actions/userAction'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Suggestions() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [userData,setUserData] = useState({});
    const cookies = new Cookies();
    const dispatch = useDispatch();

    const profileDetails = async () => {

        try {
            const res = await axios.get('https://friendzone-backend-5d8r.vercel.app/user/profile', {
                headers: {
                    authorization: cookies.get('token')
                }
            })
            // console.log(res.data);
            setUserData(res.data);
            dispatch(userProfile(res.data));
        }
        catch (error) {
            console.log(error);
        }
    }


    const display = async () => {
        try {
            const res = await axios.get('https://friendzone-backend-5d8r.vercel.app/user/suggestions', {
                headers: {
                    authorization: cookies.get('token')
                }
            })
            setData(res.data);
            profileDetails()
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        display();
    }, [])

    const followed = async (id) => {
        try{
            const res= await axios.put('https://friendzone-backend-5d8r.vercel.app/user/followers',
            {
                id:id,
            },
            {headers: {
                authorization: cookies.get('token')
            }}
            )
            display();
        }
        catch(error){
            console.log(error);
        }
    }

    const handleFollowed = async (id) => {
        console.log(id);
        followed(id);
    }





    return (
        <Box display="flex" flexDirection="column" gap="10px" >
            <Box display="flex" alignItems="center" gap="40%" mt="10%" >
                <Box display="flex" alignItems="center" gap="5%">
                    <Image borderRadius='full'
                        boxSize='70px'
                        src={Object.keys(userData).length <=0?"Loading...":userData.user.dp}
                        alt='Dan Abramov'
                    />
                    <Box>
                        <Text>{Object.keys(userData).length <=0?"Loading...":userData.user.userName}</Text>
                    </Box>
                </Box>
                <Box>
                    <Button
                    variant="link"
                    rightIcon={<BiUser/>}
                    colorScheme='facebook'
                    onClick={()=>{ navigate("/profile")}}
                    _hover={{
                        color: "blue",
                        fontWeight:"bold",
                        textDecoration:"underline"
                      }}
                    >
                        Profile
                    </Button>
                </Box>
            </Box>
            {/*  */}
            <Box>
                <Text>Suggestions for you</Text>
            </Box >
            {/*  */}
            {data.length > 0 ? data.map((el, i) => {
                return (
                    <Box display="flex" alignItems="center" gap="40%">
                        <Box display="flex" alignItems="center" gap="20%">
                            <Image borderRadius='full'
                                boxSize='50px'
                                src={el.dp}
                                alt='Dan Abramov'
                            />
                            <Box>
                                <Text>{el.name}</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Button variant='link' colorScheme='facebook'
                    _hover={{
                        // variant:"link",
                        color: "blue",
                        fontWeight:"bold",
                        textDecoration:"underline"
                      }} rightIcon={<SlUserFollow/>}
                      onClick={()=>{handleFollowed(el.id)}}
                      >
                                Follow
                            </Button>
                        </Box>
                    </Box>
                )
            }) : <Box><PostLoading/></Box>}

        </Box>
    )
}
