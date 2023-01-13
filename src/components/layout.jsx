import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <Box
      maxW={"full"}
      bgGradient="radial-gradient(circle, #0d4d5f, #134f60, #175162, #1c5463, #205665, #205665, #205665, #205665, #1c5463, #175162, #134f60, #0d4d5f)"
      color="white"
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
