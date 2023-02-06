import React, { useEffect, useState } from 'react'

import { Box, Button, Image, Text } from '@chakra-ui/react'
import PostLoading from '../PostLoading/PostLoading';

export default function Suggestions() {
    const [data, setData] = useState([]);
    const display = async () => {
        try {
            const res = await fetch('http://localhost:8080/user/suggestions', {
                headers: {
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGViYjU0ZmYzMTNiNjE5MmMxMDg2NyIsImlhdCI6MTY3NTU0MTM1Nn0.ubEoSn3QG_4lSocPmJIb4smtRNa-RO3WuRinHb6wJ_U'
                }
            })

            const data = await res.json();
            console.log(data);
            setData(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        display();
    }, [])





    return (
        <Box display="flex" flexDirection="column" gap="10px" >
            <Box display="flex" alignItems="center" gap="40%" mt="10%" >
                <Box display="flex" alignItems="center" gap="5%">
                    <Image borderRadius='full'
                        boxSize='70px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <Text>coolamitmishra</Text>
                    </Box>
                </Box>
                <Box>
                    <Button>
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
                            <Button>
                                Follow
                            </Button>
                        </Box>
                    </Box>
                )
            }) : <Box><PostLoading/></Box>}

        </Box>
    )
}
