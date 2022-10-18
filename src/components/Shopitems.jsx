import { Box, Button, Flex, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'


const Shopitems = ( {category, image, handleClick, name, _id, price}) => {
  return (
    <Box rounded={"md"} overflow={"hidden"} shadow={"md"}>
   
 <Box h={250} w={"100%"}>

    <Image src={image ||  ""} alt ={name || "image"} objectFit ={"cover"} h={"100%"} w={"100%"} />
  </Box>
<Box p={6}>
 <Text fontSize={"sm"}
 color={"gray.400"}
 fontWeight={"light"}
 textTransform={"capitalize"}>
        { category?.category || "test"}
    </Text>

    <Text>
        { name || "Lorem ipsum dolor sit amet consect"}
    </Text>
    <Text mt={4} fontWeight={"bold"}>
      { `$${parseInt(price).toLocaleString()}` || `$50` }
    </Text>
 

 <Button mt={8} bgColor={"gray.200"} px={10} py={3} onClick={() => handleClick(_id)}>
  Add to Cart
 </Button >

</Box>
   
</Box>
  )
}

export default Shopitems

