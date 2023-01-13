import React from "react";
import { chakra, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import One from "../assets/images/1.png";
import Two from "../assets/images/2.png";
import Three from "../assets/images/3.png";
import Four from "../assets/images/4.png";
import Five from "../assets/images/5.png";
import Six from "../assets/images/6.png";

const ProductCard = () => {
  const CardDetails = [
    {
      image: One,
      name: "Rosewood Bliss",
      price: "$50.0",
    },
    {
      image: Two,
      name: "Citrus Zest",
      price: "$90.0",
    },
    {
      image: Three,
      name: "Woodland Walk",
      price: "$70.0",
    },
    {
      image: Four,
      name: "Rosewood Bliss",
      price: "$80.0",
    },
    {
      image: Five,
      name: "Citrus Zest",
      price: "$70.0",
    },
    {
      image: Six,
      name: "Woodland Walk",
      price: "$100.0",
    },
  ];
  return (
    <SimpleGrid columns={{lg: 3, md: 3, sm: 2, base:1}} spacing={{lg: 24, md: 20, base: 10}}>
      {CardDetails.map((details) => (
        <Stack
          boxShadow="10px"
          borderRadius="50px"
          p={{lg: 10, base: 5}}
          bgGradient={
            "linear-gradient(to top, #024754, #043e4a, #053641, #062d37, #06252e)"
          }
          maxW={{lg: "230px", md: "180px", base: "150px"}}
          textAlign="center"
          _hover={{
            cursor: "pointer",
            bgGradient:
              "linear-gradient(to top, #112e34, #102f37, #0e3139, #0d323c, #0b333f)",
          }}
        >
          <Image src={details.image}/>
          <chakra.p>{details.name}</chakra.p>
          <Text
            fontWeight="bold"
            bgClip={"text"}
            bgGradient={
              "radial-gradient(circle, #a88010, #b68f22, #c39e32, #d1ad40, #dfbd4f, #e2c051, #e6c353, #e9c655, #e2bd4b, #dbb441, #d4ab36, #cda22b)"
            }
          >
            {details.price}
          </Text>
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default ProductCard;
