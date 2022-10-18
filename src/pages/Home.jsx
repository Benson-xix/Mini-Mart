import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Shopitems from "../components/Shopitems";
// import Product, {product} from "./Product";
import { Link as ReactLink } from "react-router-dom";
import { Dark_PURPLE } from "../utils/color";
import { useProductContext } from "../contexts/productContext";
import { useAuthContext } from "../contexts/authContext";
import { useCartContext } from "../contexts/cartContext";

const Home = () => {
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
    console.log("result");
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
    <Box>
      <Header />
      <Hero />
      <Category />
      <Box py={20}>
        <Container maxW={"container.xl"}>
          <Flex mb={"10"}>
            <Heading
              fontSize={"3xl"}
              color={Dark_PURPLE}
              fontWeight={"semibold"}
            >
              Popular items
            </Heading>
            <Spacer />

            <Link
              to={"/product"}
              as={ReactLink}
              textTransform={"capitalize"}
              fontSize={"sm"}
            >
              {/* <Product /> */}
              view all products
            </Link>
          </Flex>
          <SimpleGrid columns={[1, 2, 3, 3]} spacing={6}>
            {products.slice(0, 3)?.map((product) => (
              <Shopitems
                handleClick={(id) => addToCart(id)}
                key={product._id}
                {...product}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      {/* <Box>

          </Box> */}
    </Box>
  );
};

export default Home;
