import React, { useState } from "react";
import {
  Flex,
  Text,
  HStack,
  VStack,
  Link,
  IconButton,
  Box,
  Drawer,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FiChevronDown,
  FiFacebook,
  FiInstagram,
  FiX,
  FiMenu,
} from "react-icons/fi";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("right");

  return (
    <Flex
      w="1200px"
      px={4}
      py={3}
      m={"20px"}
      bg="white"
      boxShadow="md"
      position="relative"
      zIndex={10}
      borderRadius={"100px"}
      justify={"center"}
      alignItems={"center"}
    >
      <Flex
        as="nav"
        w="100%"
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
        wrap="wrap"
      >
        {/* Logo */}
        <Text fontSize="24px" fontWeight="bold" color="#0f2943">
          EasyFolio
        </Text>

        {/* Desktop Navigation */}
        <HStack
          spacing={6}
          display={{ base: "none", md: "flex" }}
          justify="center"
          flex="1"
        >
          <Link color="#181d22" _hover={{ color: "orange" }} href="#home">
            Home
          </Link>
          <Link color="#181d22" _hover={{ color: "orange" }} href="#about">
            About
          </Link>
          <Link color="#181d22" _hover={{ color: "orange" }} href="#resume">
            Resume
          </Link>
          <Link color="#181d22" _hover={{ color: "orange" }} href="#portfolio">
            Portfolio
          </Link>
          <Link color="#181d22" _hover={{ color: "orange" }} href="#services">
            Services
          </Link>

          {/* Simulated Dropdown */}
          <Box position="relative">
            <Link color="#181d22" _hover={{ color: "orange" }} href="#more">
              More <FiChevronDown style={{ display: "inline" }} />
            </Link>
            {/* Add an actual dropdown here using Menu if needed */}
          </Box>
        </HStack>

        {/* Social Icons & Hamburger */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Link href="https://www.facebook.com" isExternal>
            <FiFacebook size={24} color="#3b5998" />
          </Link>
          <Link href="https://www.instagram.com" isExternal>
            <FiInstagram size={24} color="#C13584" />
          </Link>
          <Link href="https://x.com" isExternal>
            <FiX size={24} color="#1DA1F2" />
          </Link>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          icon={<FiMenu />}
          variant="ghost"
          onClick={onOpen}
        />
      </Flex>

      {/* Mobile Drawer */}
   
      <Drawer.Root placement={placement} onClose={onClose} isOpen={isOpen}>
        <Drawer.Backdrop />
        <Drawer.Trigger />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Title />
            </Drawer.Header>

            <Drawer.Body mt={10}>
              <VStack align="start" spacing={4}>
                <Link onClick={onClose} href="#home">
                  Home
                </Link>
                <Link onClick={onClose} href="#about">
                  About
                </Link>
                <Link onClick={onClose} href="#resume">
                  Resume
                </Link>
                <Link onClick={onClose} href="#portfolio">
                  Portfolio
                </Link>
                <Link onClick={onClose} href="#services">
                  Services
                </Link>
                <Link onClick={onClose} href="#blog">
                  Blog
                </Link>
                <Link onClick={onClose} href="#faq">
                  FAQ
                </Link>
                <Link onClick={onClose} href="#support">
                  Support
                </Link>

                {/* Mobile Social Icons */}
                <HStack spacing={4} pt={4}>
                  <Link href="https://www.facebook.com" isExternal>
                    <FiFacebook size={20} />
                  </Link>
                  <Link href="https://www.instagram.com" isExternal>
                    <FiInstagram size={20} />
                  </Link>
                  <Link href="https://x.com" isExternal>
                    <FiX size={20} />
                  </Link>
                </HStack>
              </VStack>
            </Drawer.Body>

            <Drawer.Footer />
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Flex>
  );
};

export default Header;
