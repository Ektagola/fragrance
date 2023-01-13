import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import Logo from "../assets/logo.png";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text
      bgClip={"text"}
      bgGradient={
        "radial-gradient(circle, #a88010, #b68f22, #c39e32, #d1ad40, #dfbd4f, #e2c051, #e6c353, #e9c655, #e2bd4b, #dbb441, #d4ab36, #cda22b)"
      }
      fontWeight={"500"}
      fontSize={"lg"}
      mb={2}
    >
      {children}
    </Text>
  );
};

function Footer() {
  return (
    <Box borderRadius={"75px 75px 0px 0px"} bg={"#011C23"} color={"white"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={10}
        borderBottom={2}
        borderStyle="dashed"
        borderColor="whiteAlpha.600"
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6} pr={10}>
            <Box>
              <Image src={Logo} width="150px" />
            </Box>
            <Text fontSize={"sm"} color="whiteAlpha.600">
              We use a blend of natural essential oils and plant extracts to
              create our fragrances, ensuring a pure and authentic scent.
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>OUR STORES</ListHeader>
            <Link href={"#"} color="whiteAlpha.600">
              New York
            </Link>
            <Link href={"#"} color="whiteAlpha.600">
              London SF
            </Link>
            <Link href={"#"} color="whiteAlpha.600">
              India, Mumbai
            </Link>
            <Link href={"#"} color="whiteAlpha.600">
              South Korea, Soul
            </Link>
            <Link href={"#"} color="whiteAlpha.600">
              Germany
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>USEFUL LINKS</ListHeader>
            <Link href={"#"} color="whiteAlpha.600">
              Privacy Policy
            </Link>
            <Link href={"#"} color="whiteAlpha.600">
              Returns
            </Link>
            <Link href={"#"} color="whiteAlpha.600">
              Terms & Conditions
            </Link>
            <Link href={"#"} color="whiteAlpha.600">
              Contact Us
            </Link>
            <Link href={"#"} color="whiteAlpha.600">
              Latest News
            </Link>
            <Link href={"#"} color="whiteAlpha.600">
              Our Sitemap
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>JOIN NEWSLATTER</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email"}
                bg={"transparent"}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
                borderRadius="50px"
                borderStyle="solid"
                borderColor="white"
              />
              <IconButton
                bg="transparent"
                aria-label="Subscribe"
                _hover={{
                  bg: "transparent",
                }}
                icon={<AiOutlineArrowRight />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Stack py={5} px={20}>
        <chakra.p fontSize="14px" color="whiteAlpha.600">
          2023 CREATED BY EKTA GOLA, PREMIUM E-COMMERCE SOLUTIONS.
        </chakra.p>
      </Stack>
    </Box>
  );
}

export default Footer;
