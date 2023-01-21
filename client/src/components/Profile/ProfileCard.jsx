import { Box, Divider, Image, Spacer, Spinner,Grid,Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import results from './randomdata.json'

export default function ProfileCard() {
    // const [profile, setProfile] = useState({});

    // const profilePic = async () => {
    //     try {
    //         const res = await fetch('https://randomuser.me/api/')
    //         const data = await res.json();
    //         // console.log(data.results[0]);
    //         setProfile(data.results[0]);

    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }
    
    const [page, setPage] = useState(1);
    const [filtered,setFiltered] = useState([]);
    const [data, setData] = useState([]);
    const [max,setMax]= useState(3); 
    const [min,setMin]= useState(0);



    
    useEffect(() => {
        const arr = results.results;
        setData([...arr]);
        setMin(3*(page-1));
        setMax(page*3)
            // console.log(3*(page-1),page*3)
        const d=arr.splice(min,max)
        console.log(d)
        // setFiltered([...d])
        //  console.log(filtered);
    }, [page])


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
                                        <Image boxSize='280px' objectFit='cover' src={el.picture.large} alt='Dan Abramov' />
                                    </Box>
                                )
                            })
                        }
                    </Grid>

                    <Box display='flex' justifyContent="center" alignItems="center" >
                        <Button

                        onClick={()=>{
                            setPage(page-1);
                        }}
                        
                        >{"<"}</Button>
                        <Box>{"page: "+page}</Box>
                        <Button
                        
                        onClick={()=>{
                            setPage(page+1);
                        }}
                        
                        
                        >{">"}</Button>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
