import React from "react";
import Header from "../components/Header";
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  HStack,
  Spacer,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useAuthContext } from "../contexts/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Login = () => {
  const [userCredientials, setUserCredientials] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const { auth, handleLogin } = useAuthContext();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLoginUser = async () => {
    if (userCredientials.email && userCredientials.password) {
      setIsLoading(true);
      const result = await handleLogin(userCredientials);

      if (!result) {
        setIsLoading(false);
      }

      if (result?.token) {
        setIsLoading(false);
        toast({
          status: "success",
          title: "Login success",
          isClosable: true,
          position: "top-right",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    }
  };

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);
  return (
    <Box minH={"100%"} w={"100%"} pb={16}>
      <Header />

      <Box mt={{ base: 12, sm: 16, lg: 20 }}>
        <Container>
          <Heading mb={8} fontWeight={"semibold"} color={"gray.600"}>
            Login
          </Heading>
          <VStack gap={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) =>
                  setUserCredientials({
                    ...userCredientials,
                    email: e.target.value,
                  })
                }
                value={userCredientials.email}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type={"password"}
                onChange={(e) =>
                  setUserCredientials({
                    ...userCredientials,
                    password: e.target.value,
                  })
                }
                value={userCredientials.password}
              />
            </FormControl>

            <HStack w={"100%"}>
              <Spacer />
              <Button onClick={handleLoginUser} isLoading={isLoading}>
                Login
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Login;
