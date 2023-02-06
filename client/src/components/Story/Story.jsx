import { Box} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Avatar} from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'

export default function Story() {
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
        <Box>
            <Box>
                <Wrap>
                    {data.length > 0 ? data.map((el, i) => {
                        return (<WrapItem>
                            <Avatar 
                             size="lg" name={el.name} src={el.dp} />
                        </WrapItem>)
                    }) :
                        <Box>Loading....</Box>
                    }
                </Wrap>
            </Box>
        </Box>
    )
}
