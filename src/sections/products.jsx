import { Box, Container, Stack, chakra } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../components/productCard";

const Products = () => {
  return (
    <Box py={10}>
      <Container maxW={"7xl"} px={10}>
        <chakra.h1
          textAlign={"center"}
          fontSize={{lg: "6xl", md: "4xl", sm: "3xl", base: "3xl"}}
          bgClip={"text"}
          bgGradient={
            "radial-gradient(circle, #a88010, #b68f22, #c39e32, #d1ad40, #dfbd4f, #e2c051, #e6c353, #e9c655, #e2bd4b, #dbb441, #d4ab36, #cda22b)"
          }
          fontWeight={"bold"}
          fontFamily={'Flamenco'}
        >
          Shop Our Wide Collection of Scents
        </chakra.h1>
        <Stack my={10} alignItems={"center"}>
          <ProductCard />
        </Stack>
      </Container>
    </Box>
  );
};

export default Products;
