import { Box, Divider, Image, Spacer, Spinner, Grid, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios';


export default function ProfileCard() {
    const cookies = new Cookies();

    const [profile, setProfile] = useState({});
    const [data, setData] = useState([]);

    const profilePic = async () => {
        try {
            const res = await axios.get('http://localhost:8080/post/profilePost', {
                headers: {
                    authorization: cookies.get('token')
                }
            })
            console.log(cookies.get('token'));
            console.log(res.data);
            setData(res.data);

        }
        catch (error) {
            console.log(error);
        }
    }


    





    useEffect(() => {
        // const arr = results.results;
        // setData(arr)
        // console.log(data)
        profilePic();

    }, [])


    return (
        <Box>

            <Box w="80%" m="auto" mb="3%">
                <Divider border="1px solid #ccc" mb="2%" />
                <Box >
                    <Grid display="grid" templateColumns='repeat(3, 1fr)' gap={6} >
                        {data.length <= 0 ? null
                            : data.map((el, i) => {
                                return (
                                    <Box key={i.toString()}>
                                        <Image w="max-content" src={el.image} alt='Dan Abramov' />
                                    </Box>
                                )
                            })
                        }
                    </Grid>

                    {/* <Box display='flex' justifyContent="center" alignItems="center" >
                        <Button>{"<"}</Button>
                        <Box>1</Box>
                        <Button>{">"}</Button>
                    </Box> */}
                </Box>
            </Box>

        </Box>
    )
}
