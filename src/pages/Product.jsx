import {
  Box,
  Container,
  Heading,
  VStack,
  Flex
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Childrenfashion from "../components/Childrenfashion";
import Discount from "../components/Discount";
import Femalefashion from "../components/Femalefashion";
// import { Link, Link as ReactLink  } from "react-router-dom";
import Header from "../components/Header";
import Menfashion from "../components/Menfashion";
import Productpage from "../components/Productpage";
import ProductItems from "../ProductItems";


const Product = () => {
  const [pageHeading, setPageHeading] = useState("Product")
  const productItems = [
    {
       iconButton: <Product />,
        text:"product"
        
    },
    {
        iconButton: <Menfashion/>,
        text:"menfashion"
    },
    {
        iconButton: <Femalefashion/>,
        text:"femalefashion"
    },
    {
        iconButton: <Childrenfashion/>,
       text:"childrenfashion"
    },
    {
        iconButton: <Discount/>,
        text:"discount"
    },
]

const handleClick = text => setPageHeading(`${text} videos`)
  return (
    <Box minH={"100vh"} w={"100%"} pb={16} bgColor={"gray.100"}>
     <Header />



    <Box pb={5}> 


    <Box pt={4}>
           <Heading
            fontWeight={"semibold"}
            color={"gray.600"}
            borderBottomWidth={1}
            letterSpacing={"wide"}
            pb={3}
            textAlign={"center"}
          >
            OUR PRODUCTS
          </Heading>
       


          </Box>
       <Container maxW={'container.lg'}>
        <Flex flexWrap={"wrap"} gap={1}>
       
       


           {
            productItems.map(({iconButton,text}, index)  => (
                <ProductItems key={`${text}-${index}`} handleClick={handleClick}  iconButton={iconButton} text={text}  />
            ))
        }
        </Flex>
        <Box mt={6}>
          
            
              {
                  pageHeading?.split(" ")[0].toLowerCase() == "product" ? (
                      <Productpage />
                  ) : pageHeading?.split(" ")[0].toLowerCase() == "menfashion" ? (
                      <Menfashion/>
                  ) : pageHeading?.split(" ")[0].toLowerCase() == "femalefashion" ? (
                      <Femalefashion/>
                  ) : pageHeading?.split(" ")[0].toLowerCase() == "childrenfashion" ? (
                      <Childrenfashion/>
                  ) : pageHeading?.split(" ")[0].toLowerCase() == "discount" ? (
                      <Discount/>
                  ) : (
                      <Productpage/>
                  )


              }
         
`           </Box>
       </Container>
       </Box>
       
       </Box>
  
  
  
  )
}

export default Product;



  // <Box minH={"100vh"} w={"100%"} pb={16} bgColor={"gray.100"}>
    //   <Header />

    //     <Box  mt={{ base: 12, sm: 16, lg: 20 }}>
    //        <VStack>
    //     <Box pb={4}>
    //       <Heading
    //         fontWeight={"semibold"}
    //         color={"gray.600"}
    //         borderBottomWidth={1}
    //         letterSpacing={"wide"}
    //         pb={3}
    //         textAlign={"center"}
    //       >
    //         OUR PRODUCTS
    //       </Heading>
    //     </Box>

    //     <Box>
       
    //       {/* <ProductItems /> */}
          
    //     </Box>
    //   </VStack>
    //     </Box>
    //   </Box>
     