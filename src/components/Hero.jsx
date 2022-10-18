import React from 'react'
import {Box, Button, Container, Heading, SimpleGrid, Text} from '@chakra-ui/react'
import { Dark_PURPLE, Medium_PURPlE } from '../utils/color'
import { Link} from "react-router-dom";

const Hero = () => {
    return (
       <Box as={"section"} py={{ base : 10, sm: 16, lg: 20}}  bgColor={"rgb(33, 16, 112)"}>
        <Container maxW={"container.xl"}>
        <SimpleGrid coulumn={[1,1,2]}>
            <Box textAlign={{base:"center", sm:"center", md:"left" }}>
                <Heading textTransform= {"uppercase"} fontSize={"sm"} letterSpacing={"wide"} color={"rgb(132, 201, 147)"}>
                    25% off promotional sale
                </Heading>
            <Heading  fontSize={"7xl"} maxW={{ base: "100%", sm:"100%", md:"80%", lg:"55%"}} lineHeight={"1.2"}  fontWeight={"bold"} color={"white"} mt={{ base:2, sm:3, lg:4}}>
                All  you need in your closet.
            </Heading>

        <Text fontSize={"md"} maxW={{ base: "100%", sm:"100%", md:"70%", lg:"45%"}} color={"white"} mt={{ base:2, sm:3, lg:4}} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perspiciatis veniam placeat error fugiat facilis, quam debitis incidunt laboriosam ipsum autem temporibus deleniti? Vel, repellat?
        </Text>



        <Box mt="8"> 
            <Button variant={"unstyled"} _hover={{bgColor: Medium_PURPlE}} p={6} display={"flex"} bg={"linear-gradient(-120deg, rgb(123, 213, 199), rgb(134, 229, 90) 30%, rgb(123, 213, 199))"}
            color={"white"}>

<Link
             to={"/product"}
            //   as={ReactLink}
            //   textTransform={"capitalize"}
            //   fontSize={"sm"}
            >
                Shop Now
            </Link>
      
            </Button>
        </Box>
            </Box>
            

        </SimpleGrid>
        </Container>
       </Box>
    )
}

export default Hero