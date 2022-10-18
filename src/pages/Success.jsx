import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dark_PURPLE } from '../utils/color'

const Success = () => {
    const navigate = useNavigate()
    useEffect (() => {
        setTimeout(()=>  {
            navigate("/")
        },3000)
    }, [])
  return (
    <Box bgColor={Dark_PURPLE} w={"100%"} h={"50%"}>

         <Heading color={"white"}>
       Your payment was successful thank you for shopping with us you will be redirected
    </Heading>
        </Box>

  )
}

export default Success