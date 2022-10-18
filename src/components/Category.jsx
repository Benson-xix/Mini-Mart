import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  SimpleGrid,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useCategories } from "../contexts/categoryContent";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import Carousel from "nuka-carousel"

const CategoryCard = ({ category }) => {
  return (
    <Box
      rounded={"md"}
      maxW={{ base: "unset", md: 350 }}
      px={6}
      py={6}
      bgColor={"rgb(245, 243,252)"}
    >
      <Heading color={"rgb(1, 0, 85)"} fontSize={"2xl"}>
        {category || "Fashion"}{" "}
      </Heading>
      <Text mt={3} fontSize={"md"} color={"gray.500"} fontWeight={"light"}>
        {" "}
        {"lorem ispum dolor sitjflkepfpfojvnvooejvniekpoeolkwlwkwnn"}{" "}
      </Text>

      <Button mt={8} px={10} py={3}>
          <Link
             to={"/product"}
            >
                Shop Now
            </Link>
      
      </Button>
    </Box>
  );
};
const Category = () => {
  const { categories } = useCategories();
  const [slide, setSlide] = useState(0);
  const [slideItems, setSlideItems] = useState([])

  console.log(categories);
  const prevSlide = () => {
    if (slide) {
      setSlide(slide - 1);
    }
  };

  const nextSlide = () => {
    if (slide < categories?.length) {
      setSlide(slide + 1);
    }
  };

  useEffect (() => {
    console.log(slide)
    let index = slide
    let newArray = categories
    // console.log("CURRENT SLIDES =>", categories?.slice(slide, 3))
    setSlideItems(newArray?.splice(index, 3))
    // setSlideItems(categories?.slice(slide, 3))
  }, [slide, categories])
  return (
    <Box as={"section"} py={{ base: 10, sm: 16, md: 20 }}>
      <Container maxW={"container.xl"} pos={"relative"}>
        <IconButton
          rounded={"full "}
          pos={"absolute"}
          top={"50%"}
          boxShadow={"lg"}
          left={0}
          transform={"tanslateY(-50%"}
          onClick={prevSlide}
          disabled={slide <= 0}
        >
          <Icon as={IoIosArrowBack} />
        </IconButton>
        <SimpleGrid columns={[1, 2, 3, 3]} spacing={8}>
          {slideItems?.map((category) => (
            <CategoryCard key={category._id} {...category} />
          ))}
        </SimpleGrid>
        <IconButton
          rounded={"full "}
          pos={"absolute"}
          top={"50%"}
          boxShadow={"lg"}
          onClick={nextSlide}
          right={0}
          transform={"tanslateY(-50%"}
          disabled={(slide + 3) == categories?.length}
        >
          <Icon as={IoIosArrowForward} />
        </IconButton>
        {/* <Carousel > cout >> rev up <<cout;
       </Carousel> */}
      </Container>
    </Box>
  );
};

export default Category;
