import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    useEffect (() => {
        setTimeout(()=>  {
            navigate("/")
        }, 3000)
    }, [])
  return (
    <Box bgColor={Dark_PURPLE} w={"100%"} h={"50%"}>

    <Heading color={"white"}>
  Your payment was not successful thank you for your time
</Heading>
   </Box>
  )
}

export default Error