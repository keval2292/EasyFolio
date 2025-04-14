import React from "react";
import {
  Flex,
  Text,
  HStack,
  Link,
  Box,
  IconButton,
  CloseButton,
  Drawer,
  Portal,
  VStack,
} from "@chakra-ui/react";
import {
  FiChevronDown,
  FiFacebook,
  FiInstagram,
  FiX,
} from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Flex
        as="header"
        w="1200px"
        bg="white"
        boxShadow="md"
        position="relative"
        zIndex={10}
        justify="center"
        borderRadius={"100px"}
        m={"25px"}
      >
        <Flex
          w="100%"
          maxW="1200px"
          bg="white"
          borderRadius="100px"
          px={6}
          py={3}
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
            spacing={8} // Increased spacing between links
            display={{ base: "none", md: "flex" }} // Hidden on small screens, visible on medium and larger
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
            <Link
              color="#181d22"
              _hover={{ color: "orange" }}
              href="#portfolio"
            >
              Portfolio
            </Link>
            <Link color="#181d22" _hover={{ color: "orange" }} href="#services">
              Services
            </Link>
          </HStack>

          {/* Social Icons & Hamburger */}
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
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
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <IconButton
                aria-label="Menu"
                variant="ghost"
                size="lg"
                display={{ base: "flex", md: "none" }} // Visible on small screens, hidden on medium and larger
              >
                <CiMenuBurger />
              </IconButton>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Context>
                    {(store) => (
                      <Drawer.Body pt="6" px="6">
                        {/* Navigation Links in Drawer */}
                        <VStack align="start" spacing={6}> {/* Increased spacing */}
                          <Link
                            color="#181d22"
                            _hover={{ color: "orange" }}
                            href="#home"
                          >
                            Home
                          </Link>
                          <Link
                            color="#181d22"
                            _hover={{ color: "orange" }}
                            href="#about"
                          >
                            About
                          </Link>
                          <Link
                            color="#181d22"
                            _hover={{ color: "orange" }}
                            href="#resume"
                          >
                            Resume
                          </Link>
                          <Link
                            color="#181d22"
                            _hover={{ color: "orange" }}
                            href="#portfolio"
                          >
                            Portfolio
                          </Link>
                          <Link
                            color="#181d22"
                            _hover={{ color: "orange" }}
                            href="#services"
                          >
                            Services
                          </Link>
                          <Link
                            color="#181d22"
                            _hover={{ color: "orange" }}
                            href="#more"
                          >
                            More
                          </Link>
                        </VStack>

                        {/* Social Icons in Drawer */}
                        <HStack spacing={6} mt={6}> {/* Increased spacing */}
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
                      </Drawer.Body>
                    )}
                  </Drawer.Context>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;