import { Box, Divider, Image, Spacer, Spinner, Grid, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'

export default function ProfileCard() {
    const [profile, setProfile] = useState({});
    const [data, setData] = useState([]);

    const profilePic = async () => {
        try {
            const res = await fetch('http://localhost:8080/post/userid/63ee6f8401cac90303a5145a')
            const data = await res.json();
            console.log(data);
            setData(data);

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

            <Box w="80%" m="auto">
                <Divider border="1px solid #ccc" mb="2%" />
                <Box >
                    <Grid display="grid" templateColumns='repeat(3, 1fr)' gap={6} >
                        {data.length <= 0 ? null
                            : data.map((el, i) => {
                                return (
                                    <Box key={i.toString()}>
                                        <Image boxSize='280px' src={el.image} alt='Dan Abramov' />
                                    </Box>
                                )
                            })
                        }
                    </Grid>

                    <Box display='flex' justifyContent="center" alignItems="center" >
                        <Button>{"<"}</Button>
                        <Box>1</Box>
                        <Button>{">"}</Button>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
