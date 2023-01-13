import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  chakra,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BG from "../assets/images/bg.jpg";
import Circle from "../assets/images/circle.png";
import One from "../assets/images/one.png";
import Two from "../assets/images/two.png";
import Three from "../assets/images/three.png";
import Candles from "../assets/images/candels.png";
import Center from "../assets/images/center.png";

const Qualities = () => {
  return (
    <Box
      w={"full"}
      h={{ lg: "200vh", md: "180vh", sm: "170vh", base: "230vh" }}
      backgroundImage={BG}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Container maxW={"8xl"} py={{ lg: 20, md: 10, base: 5 }} px={{ lg: 20, md: 10 }}>
        <chakra.h1
          bgClip={"text"}
          bgGradient="radial-gradient(circle, #a88010, #b68f22, #c39e32, #d1ad40, #dfbd4f, #e2c051, #e6c353, #e9c655, #e2bd4b, #dbb441, #d4ab36, #cda22b)"
          fontSize={{ lg: "6xl", md: "5xl", sm: "4xl", base: "4xl" }}
          fontWeight={"bold"}
          textAlign={"center"}
          fontFamily={"Flamenco"}
        >
          Our Distinctive Qualities
        </chakra.h1>
        <SimpleGrid
          columns={{ lg: 3, md: 3, sm: 1, base: 1 }}
          spacing={{ lg: 5, md: 0 }}
          pt={10}
        >
          <Stack
            textAlign={{ lg: "end", md: "end", sm: "start", base: "start" }}
            py={{ lg: 10, md: 8, sm: 5, base: 5 }}
            px={{ lg: 10, md: 5, sm: 5, base: 5 }}
          >
            <chakra.h1
              fontWeight={"bold"}
              fontSize={{ lg: "22px", sm: "20px", base: "18px" }}
            >
              Long-lasting wear
            </chakra.h1>
            <Text pb={{ lg: 20, md: 10 }} color={"gray.400"}>
              Our perfumes are designed to last throughout the day, so you can
              feel confident that your scent will stay with you from morning to
              night.
            </Text>
            <chakra.h1
              fontWeight={"bold"}
              fontSize={{ lg: "22px", sm: "20px", base: "18px" }}
            >
              Sustainable packaging
            </chakra.h1>
            <Text color={"gray.400"}>
              We are committed to sustainability and use
              environemntally-friendly packaging for perfumes. Our bottles are
              made from recycled materials.
            </Text>
          </Stack>
          <Stack align={'center'}>
            <Image src={Circle} maxW={{ sm: "220px", base: "200px"}}/>
          </Stack>
          <Stack
            py={{ lg: 10, md: 8, sm: 5, base: 5 }}
            px={{ lg: 10, md: 5, sm: 5, base: 5 }}
          >
            <chakra.h1
              fontWeight={"bold"}
              fontSize={{ lg: "22px", sm: "20px", base: "18px" }}
            >
              Natural ingredients
            </chakra.h1>
            <Text color={"gray.400"} pb={{ lg: 20, md: 10 }}>
              We use a blend of natural essential oils and plants extracts to
              create our fragrances, ensuring a pure and authentic scent.
            </Text>
            <chakra.h1
              fontWeight={"bold"}
              fontSize={{ lg: "22px", sm: "20px", base: "18px" }}
            >
              Unique scents
            </chakra.h1>
            <Text color={"gray.400"}>
              From floral and woody to citrus and spicy, we offer a wide range
              of scents to suit every preferences. Our perfumes are crafted by
              skilled perfumes.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Stack mx={{lg: 24, sm: 10, base: 5}}>
        <SimpleGrid columns={{lg: 3, md: 3, sm: 1, base: 1}} spacing={5}>
          <Stack>
            <Image
              src={Candles}
              width={"300px"}
              borderRadius={"50px"}
              mb={{ lg: 10, md: 5 }}
            />
            <Image src={One} width={"300px"} borderRadius={"50px"} />
          </Stack>
          <Stack py={{lg: 20, sm: 10, base: 10}}>
            <Image src={Center} borderRadius={"50px"} />
          </Stack>
          <Stack>
            <Image
              src={Three}
              width={"300px"}
              mb={{ lg: 10, md: 5 }}
              height={"200px"}
              borderRadius={"50px"}
            />
            <Image src={Two} width={"300px"} borderRadius={"50px"} />
          </Stack>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Qualities;
