import React from "react";
import { chakra } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Container,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const Testimonial = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      label: "Efficient Collaborating",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      name: "Jane Cooper",
      title: "CEO at ABC Corporation",
    },
    {
      img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      label: "Efficient Collaborating",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      name: "Jane Cooper",
      title: "CEO at ABC Corporation",
    },
    {
      img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      label: "Efficient Collaborating",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      name: "Jane Cooper",
      title: "CEO at ABC Corporation",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Box maxW="full" bgColor="#011C23" borderRadius="75px 75px 0px 0px">
      <Container maxW="8xl" py="20">
        <chakra.h1
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center"
          bgClip="text"
          bgGradient={
            "radial-gradient(circle, #a88010, #b68f22, #c39e32, #d1ad40, #dfbd4f, #e2c051, #e6c353, #e9c655, #e2bd4b, #dbb441, #d4ab36, #cda22b)"
          }
          fontFamily={"Flamenco"}
        >
          Customer Reviews
        </chakra.h1>
        <Flex w="full" pos="relative" overflow="hidden">
          <Flex h="400px" w="full" {...carouselStyle} mt={20}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                <Stack
                  direction={{ base: "column", md: "row" }}
                  spacing={{ base: 10, md: 4, lg: 10 }}
                >
                  <Box>
                    <Stack
                      bgGradient={
                        "linear-gradient(to top, #024754, #043e4a, #053641, #062d37, #06252e)"
                      }
                      boxShadow={"lg"}
                      p={8}
                      rounded={"2xl"}
                      align={"center"}
                      pos={"relative"}
                      maxW={'xl'}
                      _after={{
                        content: `""`,
                        w: 0,
                        h: 0,
                        borderLeft: "solid transparent",
                        borderLeftWidth: 16,
                        borderRight: "solid transparent",
                        borderRightWidth: 16,
                        borderTop: "solid",
                        borderTopWidth: 16,
                        borderTopColor: "#0d4d5f",
                        pos: "absolute",
                        bottom: "-16px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <chakra.h1 as={"h3"} fontSize={"xl"}>
                        {slide.label}
                      </chakra.h1>
                      <Text
                        textAlign={"center"}
                        color={"gray.600"}
                        fontSize={"sm"}
                      >
                        {slide.description}
                      </Text>
                    </Stack>
                    <Flex align={"center"} mt={8} direction={"column"}>
                      <Avatar src={slide.img} alt={slide.name} mb={2} />
                      <Stack spacing={-1} align={"center"}>
                        <Text fontWeight={600}>{slide.name}</Text>
                        <Text fontSize={"sm"} color={"gray.600"}>
                          {slide.title}
                        </Text>
                      </Stack>
                    </Flex>
                  </Box>
                  <Box>
                    <Stack
                      bgGradient={
                        "linear-gradient(to top, #024754, #043e4a, #053641, #062d37, #06252e)"
                      }
                      boxShadow={"lg"}
                      p={8}
                      rounded={"2xl"}
                      align={"center"}
                      pos={"relative"}
                      maxW={'xl'}
                      _after={{
                        content: `""`,
                        w: 0,
                        h: 0,
                        borderLeft: "solid transparent",
                        borderLeftWidth: 16,
                        borderRight: "solid transparent",
                        borderRightWidth: 16,
                        borderTop: "solid",
                        borderTopWidth: 16,
                        borderTopColor: "#0d4d5f",
                        pos: "absolute",
                        bottom: "-16px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <chakra.h1 as={"h3"} fontSize={"xl"}>
                        {slide.label}
                      </chakra.h1>
                      <Text
                        textAlign={"center"}
                        color={"gray.600"}
                        fontSize={"sm"}
                      >
                        {slide.description}
                      </Text>
                    </Stack>
                    <Flex align={"center"} mt={8} direction={"column"}>
                      <Avatar src={slide.img} alt={slide.name} mb={2} />
                      <Stack spacing={-1} align={"center"}>
                        <Text fontWeight={600}>{slide.name}</Text>
                        <Text fontSize={"sm"} color={"gray.600"}>
                          {slide.title}
                        </Text>
                      </Stack>
                    </Flex>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
          <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({
              length: slidesCount,
            }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", null, "15px"]}
                m="0 2px"
                bg={
                  currentSlide === slide ? "white" : "whiteAlpha.600"
                }
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{
                  bg: "blackAlpha.800",
                }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Testimonial;
