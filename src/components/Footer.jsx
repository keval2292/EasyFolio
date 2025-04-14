import {
  Box,
  Text,
  Flex,
  Icon,
  Button,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

function Footer() {
  return (
    <Box
      bg="white"
      py={6}
      px={{ base: 4, md: 8 }}
      textAlign="center"
      position="relative"
    >
      {/* Copyright and Company Name */}
      <Text fontSize="sm" color="gray.600">
        © Copyright{" "}
        <Text as="span" fontWeight="bold" color="black">
          EasyFolio
        </Text>{" "}
        All Rights Reserved
      </Text>

      {/* Social Media Icons */}
      <Flex justify="center" mt={4} mb={2}>
        <IconButton
          aria-label="Twitter"
          variant="outline"
          mr={2}
          _hover={{ color: "#e87532" }}
          borderRadius="50%"
        >
          <FaTwitter />
        </IconButton>
        <IconButton
          aria-label="Facebook"
          variant="outline"
          mr={2}
          _hover={{ color: "#e87532"}}
          borderRadius="50%"
        >
          <FaFacebook />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          variant="outline"
          mr={2}
          _hover={{ color: "#e87532" }}
          borderRadius="50%"
        >
          <FaInstagram />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          variant="outline"
          _hover={{ color: "#e87532" }}
          borderRadius="50%"
        >
          <FaLinkedin />
        </IconButton>
      </Flex>

      {/* Designed by BootstrapMade */}
      <Text fontSize="xs" color="gray.600">
        Designed by{" "}
        <Link href="#" color="orange.500" textDecoration="underline">
          Keval Ramani
        </Link>
      </Text>

      {/* Scroll Up Button (Floating Action Button) */}
      {/* <IconButton
        aria-label="Scroll Up"
        bg="orange.500"
        color="white"
        size="md"
        position="absolute"
        top={4}
        right={4}
        _hover={{ bg: "orange.600" }}
      >
        <IoIosArrowUp />
      </IconButton> */}
    </Box>
  );
}

export default Footer;
