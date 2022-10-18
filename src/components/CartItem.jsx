import { Button, Flex, HStack, IconButton, Image, Input, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoTrash } from 'react-icons/io5'
import { useCartContext } from '../contexts/cartContext'

const CartItem = ({product,quantity, _id}) => {
    const {cartItems, handleDeleteFromCart, handleAddToCart, handleDecrementCartitem} = useCartContext()
    const [amount, setAmount] = useState(quantity || 1)
    

        const setCartAmount = () => {
            if(product) {
                const count = cartItems?.filter((item) => item?.product?._id === product?._id).length
                setAmount(count)
                return
            }
setAmount(1)
        }

        const handleDecrease = async () => {
            if(amount > 1 ) {
                await handleDecrementCartitem(product._id)
                setAmount(amount - 1)
            }
        }

        const handleIncrease = async () => {
            if(amount < 20) {
                const item = {
                   product: product._id,
                   quantity: 1
                }
                const result = await handleAddToCart(item)
                console.log(result)
                setAmount(amount + 1)
            }
            
        }
        const handleDeleteItem = async  (id) => {
            const result = await handleDeleteFromCart (id)
            console.log(result)
        }

//    useEffect (() => {
//     setCartAmount()
//    }, [cartItems])
    


  return (
   <Flex w={"100%"} alignItems={"center"}  py={4}>
        <Image src={product?.image} borderWidth={1} w={120} h={150} bgColor={"gray.100"} />

        <VStack w={"100%"} ml={4}>
            <HStack w={"100%"}>
                   <Text color={"gray.600"}>{product?.name} </Text>
                   <Spacer/>
                   <Text color={"#333 "} fontWeight={600}>{"$" + Math.round (+product?.price * amount) } </Text>
            </HStack>
            
         <Text w={"100%"}  fontSize={"sm"} color={"gray.400"}>{"$" + product?.price}</Text>
         <HStack w={"100%"} alignItems={"center"}>

         
         <Flex mt={3}>
            <Button onClick={handleDecrease}  disabled={amount <= 1} size={"xs"}>
            -
            </Button>
            <Input readOnly textAlign={"center"} size={"xs"} maxW={"40px"} value={amount}>
            </Input>
            <Button onClick={handleIncrease} size={"xs"}>
                +
            </Button>
         </Flex>
         <IconButton onClick={() => handleDeleteItem(_id)} size={"sm"} icon={<IoTrash/>} />
         </HStack>
        </VStack>
   </Flex>
  )
}

export default CartItem