import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Text,
  Link,
  Input,
  InputLeftAddon,
  InputRightElement,
  Select,
  InputGroup,
  VStack,
  useDisclosure,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { GiWallet } from "react-icons/gi";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link as ReactLink } from "react-router-dom";
import { Dark_PURPLE, Medium_PURPlE } from "../utils/color";
import { useState } from "react";
import { getAllCategories } from "../api/category";
import { useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import ReactFlagsSelect from "react-flags-select";
import { useAuthContext } from "../contexts/authContext";
import { useCartContext } from "../contexts/cartContext";

const SelectOptions = ({ data }) => {
  return (
    <Box>
      <Select border={"none"} fontSize={"sm"} color={"gray.600"}>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};

const Header = () => {
  const [search, setSearch] = useState("");
  const { auth, logoutUser } = useAuthContext();
  const { isOpen: isAccountOpen, onToggle: isAccountToggle } = useDisclosure();
  const { cartItems } = useCartContext();
  // console.log(useCartContext());
  const [options, setOption] = useState([
    { value: "*", label: "all categories" },
  ]);

  const setUpCategories = async () => {
    const data = await getAllCategories();
    const newData = data.map((category) => ({
      value: category._id,
      label: category.category,
    }));
    newData.unshift({ value: "*", label: "all categories" });
    setOption(newData);
    //console.log(data)
    //console.log(newData)
  };

  useEffect(() => {
    setUpCategories();
  }, []);
  // const options = [{ value: "*", label: "all categories" }];
  return (
    <Box w={"100%"}>
      {/* header */}
      <Box
        py={"2"}
        bgColor={Medium_PURPlE}
        display={{ base: "none", sm: "block" }}
      >
        <Container maxW={"container.xl"}>
          <Flex justifyContent={"space-between"}>
            <HStack color={"white"}>
              <Icon fontSize={"xl"} as={GiWallet} />
              <Text fontSize={"sm"}>Free shipping on orders over $100</Text>
            </HStack>

            <Button
              _hover={{ opacity: 0.75 }}
              py={1}
              px={"3"}
              display={"flex"}
              fontSize={"xs"}
              bgColor={"rgb(13,9,49)"}
              color={"white"}
            > <Link
            to={"/register"}
            
            >
            
          
              Dont't miss out.&nbsp;<strong>Subscribe now</strong>  </Link>
            </Button>
          </Flex>
        </Container>
      </Box>

      <Box py={"4"} bgColor={"rgb(70, 41, 220)"}>
        <Container maxW={"container.xl"}>
          <Flex justifyContent={"space-between"}>
            {/* logo*/}
            <Link
              _hover={{ textDecoration: "none" }}
              color={"white"}
              display={"flex"}
              fontSize={"2xl"}
              fontWeight={"hairline"}
              as={ReactLink}
              to={"/"}
            >
              mini<Text fontWeight={"medium"}>mart</Text>
            </Link>

            <Flex
              maxW={"400px"}
              display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
            >
              {/* search box*/}
              <InputGroup
                border={"none"}
                color={"white"}
                maxw={"500px"}
                display={{ md: "none", lg: "flex" }}
              >
                <InputLeftAddon
                  border={"none"}
                  bgColor={Dark_PURPLE}
                  px={0}
                  children={<SelectOptions data={options} />}
                />
                <Input
                  list='category'
                  border={"none"}
                  bg={"white"}
                  color={"gray.500"}
                  onChange={(e) => setSearch(e.target.value)}
                  type='text'
                  placeholder='Search name, category...'
                  value={search}
                />
                <datalist id='category'>
                  {options.map((item, index) => (
                    <option key={index} value={item.label}></option>
                  ))}
                </datalist>
                <InputRightElement
                  fontSize={"xl"}
                  cursor={"pointer"}
                  children={<IoSearchOutline color={"#ccc"} />}
                />
              </InputGroup>
            </Flex>

            {/* cart,  npm install react-flags-select -D,  npm install react-flags-select --save*/}
            <HStack gap={"1rem"} display={{ base: "none", sm: "flex" }}>
              <HStack
                onClick={isAccountToggle}
                alignItems={"center"}
                position={"relative"}
                cursor={"pointer"}
                color={"white"}
              >
                <Text fontSize={"sm"}>Account</Text>
                <Icon
                  as={IoIosArrowDown}
                  transition={"transform .2s"}
                  transform={isAccountOpen ? "rotate(180deg)" : "rotate(0deg)"}
                  fontSize={"sm"}
                />

                <Box
                  position={"absolute"}
                  top={"120%"}
                  left={"0"}
                  minWidth={"100%"}
                  width={"200px"}
                  zIndex={"1"}
                  bgColor={"white"}
                  transformOrigin={"top"}
                  transition={"all .2s ease-in-out"}
                  transform={isAccountOpen ? "scaleY(1)" : "scaleY(0)"}
                >
                  <VStack w={"100%"}>
                    {!auth ? (
                      <>
                        <Link
                          as={ReactLink}
                          p={3}
                          fontWeight={"medium"}
                          w={"100%"}
                          _hover={{ bgColor: "gray.200" }}
                          fontSize={"sm"}
                          color={"gray.600"}
                          textAlign={"left"}
                          to={"/login"}
                        >
                          Login
                        </Link>

                        <Link
                          as={ReactLink}
                          p={3}
                          fontWeight={"medium"}
                          w={"100%"}
                          _hover={{ bgColor: "gray.200" }}
                          fontSize={"sm"}
                          color={"gray.600"}
                          textAlign={"left"}
                          to={"/register"}
                        >
                          Sign up
                        </Link>
                      </>
                    ) : (
                      <Button
                        onClick={() => logoutUser()}
                        p={3}
                        fontWeight={"medium"}
                        w={"100%"}
                        _hover={{ bgColor: "gray.200" }}
                        fontSize={"sm"}
                        color={"red.600"}
                        textAlign={"left"}
                      >
                        Logout
                      </Button>
                    )}
                  </VStack>
                </Box>
              </HStack>

              <Divider
                borderColor={"gray.300"}
                orientation='vertical'
                height={"80%"}
              />

              <HStack gap={".8rem"}>
                {/* CountryCode */}
                <HStack color={"white"}>
                  {/* <ReactFlagsSelect   /> */}
                  <Box
                    rounded={"full"}
                    w={30}
                    h={30}
                    overflow={"hidden"}
                    borderColor={"white"}
                    borderWidth={2}
                  >
                    <ReactCountryFlag
                      countryCode='NG'
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      svg
                    />
                  </Box>
                  <Icon as={IoIosArrowDown} fontSize={"sm"} />
                </HStack>
                <HStack
                  color={"white"}
                  gap={".3rem"}
                  as={ReactLink}
                  to={"/cart"}
                >
                  <Icon as={IoCartOutline} fontSize={"xl"} />
                  <Text fontSize={"md"}>Cart</Text>
                  <Badge
                    px={2}
                    vpy={1}
                    rounded={"full"}
                    bgColor={"black"}
                    color
                  >
                    {cartItems.length}
                  </Badge>
                </HStack>
              </HStack>
            </HStack>

            {/* Mobile view */}
            <HStack
              color={"white"}
              display={{ base: "flex", sm: "none" }}
              gap={".3rem"}
            >
              <Icon as={IoCartOutline} fontSize={"xl"} />
              <Text fontSize={"md"}>Cart</Text>
              <Badge px={2} vpy={1} rounded={"full"} bgColor={"black"} color>
                0
              </Badge>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
