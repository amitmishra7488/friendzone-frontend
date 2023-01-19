import React from 'react'

export default function LoginPart() {
  return (
    <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" mt="30%" gap={2}>
            <Text
                fontSize="30px"
                fontWeight="bold"
            >Welcome to SignUp</Text>
            <Text
                fontSize="15px"
                fontWeight="medium"
            >You have an Account ?</Text>
            <Button borderRadius="20px" variant="outline"
                _hover={{
                    background: "transparent",
                    color: "teal.500",
                    border: "1px solid teal"
                }}
            >LogIn</Button>
    </Box>
  )
}
