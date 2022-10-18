import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getAllProducts } from "../api/product";

// create a context
const ProductContext = createContext();

// create a context provider

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleGetProducts = async () => {
    const result = await getAllProducts();

    if ("error" in result) return;
    setProducts(result);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ name: "b", products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

// create a custom hook
export const useProductContext = () => useContext(ProductContext);
