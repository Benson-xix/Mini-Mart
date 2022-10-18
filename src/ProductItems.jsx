import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Dark_PURPLE, Medium_PURPlE } from "./utils/color";

const ProductItems = ({ IconButton, handleClick, text }) => {
  const page = text?.slice(0, 1)?.toUpperCase() + text.slice(1)
  console.log(text);

  return (
    <Box
      p={3}
      flex={1}
      cursor={"pointer"}
      onClick={() => handleClick(page)}
      bgColor={ Medium_PURPlE}
      _hover={{bgColor: Dark_PURPLE}}
      rounded={"md"}
    >
      {IconButton}
      <Heading
        mt={2.5}
        textTransform={"capitalize"}
        fontWeight={600}
        color={"white"}
        fontSize={"lg"}
      >
        {text}
      </Heading>
    </Box>
  );
};

export default ProductItems;

//<Routes>
//       {
//   routes.map(({ path, component }, index) => (
//               <Route key={`${path}-${index}`} path={path} element={component} />
//           ))

// }
//       {/* {routes.map((item, index) => (
//         <Route key={index} path={item.path} element={item.component} />
//       ))} */}
//     </Routes>

// const routes = [
//   {
//     path: "/productpage",
//     component: <Productpage/>,
//   },

//   {
//     path: "/menfashion",
//       component: <Menfashion />,
//   },
//   {
//     path: "/femalefashion",
//     component: <Femalefashion />,
//   },

//   {
//     path: "/childrenfashion",
//     component: <Childrenfashion />,
//   },

//   {
//     path: "/discount",
//     component: <Discount />,
//   },
// ];
// import { Route, Routes } from "react-router-dom";
// import Product from "./pages/Product";
// import Childrenfashion from "./components/Childrenfashion";
// import Discount from "./components/Discount";
// import Femalefashion from "./components/Femalefashion";
// import Menfashion from "./components/Menfashion";
// import Productpage from "./components/Productpage";
