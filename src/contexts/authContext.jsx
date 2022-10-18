import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { loginUser } from "../api/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const toast = useToast();

  const logoutUser = () => {
    setAuth(null);
    // toast({
    //   title: "success",
    //   status: "logged out successful",
    //   isClosable: true,
    // });
    localStorage.removeItem("AUTH");
  };

  const handleLogin = async (user) => {
    const res = await loginUser(user);
    if ("error" in res) {
      toast({
        title: res.error,
        status: "error",
        isClosable: true,
      });
      return;
    }

    localStorage.setItem("AUTH", JSON.stringify(res));

    setAuth(res);
    return res;
  };

  useEffect(() => {
    const AUTH = localStorage.getItem("AUTH");
    if (AUTH) {
      setAuth(JSON.parse(AUTH));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, handleLogin, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
