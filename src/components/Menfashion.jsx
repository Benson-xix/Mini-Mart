import { Box, Button, Container, Flex, Heading, HStack, SimpleGrid, Spacer, Text, useToast, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Shopitems from "../components/Shopitems";
import { useProductContext } from "../contexts/productContext";
import { useAuthContext } from "../contexts/authContext";
import { useCartContext } from "../contexts/cartContext";

const Menfashion = () => {
  const { name, products } = useProductContext();
const { auth } = useAuthContext();
  const toast = useToast();
  const { handleAddToCart } = useCartContext();

  const addToCart = async (id) => {
    console.log("ID =>> ", id);
    if (!auth) {
      
      toast({
        title: "pls Login in first",
        status: "info",
        position: "top-right",
      });
      return;
    }
    console.log("result")
    const item = {
      product: id,
      quantity: 1,
    };
    const result = await handleAddToCart(item);
    console.log(result);
    if ("error" in result) {
      toast({
        title: result,
        error,
        status: "error",
        position: "top-right",
        isCloseable: true,
      });
      return;
    }
    toast({
      title: "Item is added to cart",
      status: "success",
      position: "top-right",
      isCloseable: true,
    });
  };

  return (
    <Box minH={"100vh"} w={"100%"} pb={16} bgColor={"gray.100"}>
   

    <Box  mt={{ base: 12, sm: 16, lg: 20 }}>
    
       <Container maxW={"container.xl"}>
      <Flex alignItems={"flex-start"} flexWrap={"wrap"} gap={4}>


     


        <Box p={4}>
{/* 
        <SimpleGrid columns={[1, 2, 3, 3]} spacing={6}>
            {products.slice(0, 3)?.map((product) => (
    <Shopitems
                handleClick={(id) => addToCart(id)}
                key={product._id}
                {...product}
              />
              ))}
              </SimpleGrid> */}
               </Box>
       
              </Flex>
       </Container>

    
              
    </Box>
    </Box>
  )
}

export default Menfashion