import { Box, Button, Container, FormControl, FormLabel, HStack, Input, Spacer, VStack, Heading, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../api/auth'
import Header from '../components/Header'
import { useAuthContext } from '../contexts/authContext'

const Register = () => {
    const [userCredientials, setUserCredientials] = useState({
        name: "",
        email:"",
        password:"",
    })
const toast = useToast()
const navigate = useNavigate()
const {auth} = useAuthContext()
    const handleRegistration = async () => {
        const result = await registerUser (userCredientials) 
        console.log(result)
        if ("error" in result ){
            console.log(result.error)
            toast({
                title: "something went wrong",
                status: "error",
        
            })
            return 
        }

        if (result?._id){
            toast({
                title: "registration succesful",
                status: "success",
        
            })
            navigate("/login")
        }
    } 
    useEffect (() => {
console.log(userCredientials)
    }, [userCredientials]) 

    useEffect(() => {
        if(auth) {
            navigate("/")
        }
    }, [auth])
  return (
    <Box
    minH={"100%"} 
    w={"100%"}
    pb={16}>
        


     <Header/>

     <Box mt={{base:12, sm:16, lg:20 }}>
    
        <Container>
        <Heading mb={8} fontWeight={"semibold"} color={"gray.600"}>Register</Heading>
            <VStack gap={6}>
            <FormControl>
                    <FormLabel>
                    Name 
                    </FormLabel>
                    <Input onChange={(e) => setUserCredientials({...userCredientials, name: e.target.value })}
                    value={userCredientials.name}
                     />
                </FormControl>

                <FormControl>
                    <FormLabel>
                        Email 
                    </FormLabel>
                    <Input  
                    onChange={(e) => setUserCredientials({...userCredientials, email: e.target.value })}
                    value={userCredientials.email}/>
                </FormControl>

                <FormControl>
                    <FormLabel>
                        Password 
                    </FormLabel>
                    <Input
                    onChange={(e) => setUserCredientials({...userCredientials, password: e.target.value })}
                    value={userCredientials.password} type={"password"} />
                </FormControl>

                    <HStack w={"100%"}>
                        <Spacer/>
                <Button onClick={handleRegistration}>
                        Sign Up
                                </Button>

                    </HStack>
               
            </VStack>

        </Container>
     </Box>

   </Box>
  )
}

export default Register