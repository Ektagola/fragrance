import {
  Stack,
  Flex,
  Text,
  VStack,
  Image,
  chakra,
  SimpleGrid,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import Model from "../assets/images/model.png";
import BannerImage from "../assets/images/banner.jpg";
import Shop from "../assets/images/Shop_Now.png";
import Longer from "../assets/images/stay_Longer.png";

export default function Banner() {
  return (
    <Flex
      maxW={"full"}
      height={{lg: "90vh", md: "80vh"}}
      backgroundImage={BannerImage}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <Container maxW={"8xl"} py={10} px={10}>
        <SimpleGrid columns={{lg: 2, md: 2, sm: 1, base: 1}} spacing={10}>
          <Stack>
            <chakra.h1
              fontSize={{ lg: "6xl", md: "4xl", sm: "3xl", base: "3xl"}}
              fontWeight={"bold"}
              fontFamily={"Flamenco"}
              lineHeight={{lg: "80px", md: "60px"}}
            >
              Fall in love with{" "}
              <chakra.span display={"block"}>Our Signature</chakra.span>
              <chakra.span
                fontSize={{lg: "7xl", md: "6xl", sm: "4xl", base: "4xl"}}
                display={"block"}
                bgClip={"text"}
                bgGradient={
                  "radial-gradient(circle, #a88010, #b68f22, #c39e32, #d1ad40, #dfbd4f, #e2c051, #e6c353, #e9c655, #e2bd4b, #dbb441, #d4ab36, #cda22b)"
                }
              >
                Perfumes
              </chakra.span>
            </chakra.h1>
            <Box
              px={5}
              borderLeft={"2px"}
              borderStyle={"solid"}
              borderColor={"white"}
              maxW={"250px"}
              my={10}
            >
              <Text>
                Discover the perfect fragrance for you with our wide collection
                of perfumes.
              </Text>
            </Box>
            <HStack py={10}>
              <VStack>
                <Text
                  bgClip={"text"}
                  bgGradient={
                    "radial-gradient(circle, #a88010, #b68f22, #c39e32, #d1ad40, #dfbd4f, #e2c051, #e6c353, #e9c655, #e2bd4b, #dbb441, #d4ab36, #cda22b)"
                  }
                  fontWeight={"bold"}
                  fontSize={"2xl"}
                >
                  90+
                </Text>
                <chakra.p>Perfumes</chakra.p>
              </VStack>
              <VStack>
                <Text
                  bgClip={"text"}
                  bgGradient={
                    "radial-gradient(circle, #a88010, #b68f22, #c39e32, #d1ad40, #dfbd4f, #e2c051, #e6c353, #e9c655, #e2bd4b, #dbb441, #d4ab36, #cda22b)"
                  }
                  fontWeight={"bold"}
                  fontSize={"2xl"}
                  pr={10}
                >
                  15M+
                </Text>
                <chakra.p>Customers</chakra.p>
              </VStack>
              <Image src={Longer} maxW={{lg: "300px", md: "150px", sm: "100px", base: "100px"}} />
            </HStack>
          </Stack>
          <Stack>
            <VStack>
              <Image src={Model} maxW={{lg: "800px", md: "400px"}} />
            </VStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Stack>
        <Image src={Shop} maxW={"100px"} />
      </Stack>
    </Flex>
  );
}
