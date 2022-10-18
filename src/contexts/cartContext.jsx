import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { addItemToCart, decreamentCartItem, deleteCartItem } from "../api/cart";
import { useAuthContext } from "./authContext";
import { getUserCartItem } from "../api/cart";
//paystack account
const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const toast = useToast();
  const { auth } = useAuthContext;

  const handleAddToCart = async (body) => {
    const result = await addItemToCart(body);
    if(result) {
          if ("error" in result) {
      toast({
        isClosable: true,
        title: result.error,
        position: "top-right",
        status: "error",
      });
      return;
    }
      await getAllUserCartItem()
    return result;
  };
    }
  
const handleDecrementCartitem = async (id) => {
      const result = await decreamentCartItem(id)
      console.log(result)
    }

  const getAllUserCartItem = async () => {
    const result = await getUserCartItem();
    if ("error" in result) {
      return;
    }
    setCartItems(result);
  };

  const handleDeleteFromCart = async (id) => {
    const result = await deleteCartItem(id);

   
    if ("error" in result) {
      toast({
        isClosable: true,
        title: result.error,
        position: "top-right",
        status: "error",
      });
      return;
    }

  const newItems = cartItems.filter(item => item._id != result._id)
   setCartItems(newItems)
    return result;
  };

  useEffect(() => {
    getAllUserCartItem();
  }, [auth]);

  return (
    <CartContext.Provider
      value={{ handleAddToCart, cartItems, handleDeleteFromCart, handleDecrementCartitem}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => useContext(CartContext);
