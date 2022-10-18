import { Box, Button, Container, Flex, Heading, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { callCheckOut } from "../api/cart";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import { useCartContext } from "../contexts/cartContext";
import { Dark_PURPLE, Medium_PURPlE } from "../utils/color";

const Cart = () => {
  const { cartItems } = useCartContext();
  const [totalItem, setTotalItem] = useState(0)
  console.log(cartItems);

  const handleCheckout = async () => {

    const result = await callCheckOut (totalItem)
    console.log(result)
    if ("error" in result) {
      console.log(result.error)
      return result
    }

    window.open(result.data.authorization_url, "_blank")
  }

  const getTotalItems = (item) => {
      if(item) {
       return item.map(cartItem => {
          const quantity = cartItem.quantity
          const price = cartItem.product.price

          return quantity * price
        }).reduce((prev, item) => prev + item, 0)
      }
  }
  useEffect(() => {
    setTotalItem(getTotalItems(cartItems))
  }, [cartItems])
  return (
    <Box minH={"100vh"} w={"100%"} pb={16} bgColor={"gray.100"}>
      <Header />

      <Box mt={{ base: 12, sm: 16, lg: 20 }}>
        <Container maxW={"container.xl"}>
          <Flex alignItems={"flex-start"} flexWrap={"wrap"} gap={4}>
            <Box
              flex={1}
              minW={"500px"}
              bg={"#fff"}
              p={4}
              rounded={"md"}
              shadow={"md"}
            >
              <Heading
                fontWeight={"semibold"}
                color={"gray.600"}
                borderBottomWidth={1}
                pb={3}
              >
                Cart
              </Heading>

              <VStack>
                {cartItems.length ? (
                  cartItems?.map((item) => (
                    <CartItem key={item?._id} {...item} />
                  ))
                ) : (
                  <Text textAlign={"center"} py={4} fontWeight={500} color={"gray.400"}>
                    No Item in cart
                  </Text>
                )}
              </VStack>
            </Box>

            <Box w={"300px"} bgColor={"#ffff"} p={4}>
              <VStack gap={4}>
                <HStack w={"100%"}>
                  <Text>Total:</Text>
                  <Spacer/>
                  <Text>
                    {totalItem.toLocaleString()}
                  </Text>
                  
                </HStack>

                <VStack w={"100%"}>
                    <Button mt={5} w={"100%"} fontSize={"sm"} bgColor={Medium_PURPlE} _hover={{bgColor: Medium_PURPlE, opcaity:95}} color={"#fff"} onClick={handleCheckout} >
                  proceed to checkout
                </Button>
                <Button mt={5} w={"100%"} fontSize={"sm"} color={"#fff"}>
                <Link
              to={"/product"}>Continue Shopping </Link>
                 
                </Button>
                </VStack>
              
              </VStack>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Cart;
