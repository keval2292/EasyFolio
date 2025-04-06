import React from "react";
import {
  Flex,
  Text,
  HStack,
  Link,
  Button,
  Menu,
  Portal,
  Box,
} from "@chakra-ui/react";
import { FiChevronDown, FiFacebook, FiInstagram, FiX } from "react-icons/fi";

const Header = () => {
  return (
    <Flex w={"100%"}>
    <Flex
      as="nav"
      boxShadow="md"
      borderRadius="full"
      bg={"white"}
      px={6}
      py={3}
      mx="auto"
      my={"30px"}
      maxW="6xl"
      align="center"
      justify="space-between" // Logo, Center, and Icons aligned
      position="relative"
    >
      {/* Left: Logo */}
      <Text fontSize={"24px"} fontWeight="bold" color={"#0f2943"}>
        EasyFolio
      </Text>

      {/* Center: Navigation Links */}
      <HStack spacing={6} justify="center" flex="1">
        <Link color={"#181d22"} _hover={{ color: 'orange' }} href="#home">Home</Link>
        <Link color={"#181d22"} _hover={{ color: 'orange' }} href="#about">About</Link>
        <Link color={"#181d22"} _hover={{ color: 'orange' }} href="#resume">Resume</Link>
        <Link color={"#181d22"} _hover={{ color: 'orange' }} href="#portfolio">Portfolio</Link>
        <Link color={"#181d22"} _hover={{ color: 'orange' }} href="#services">Services</Link>

        {/* Dropdown Menu */}
        <Menu.Root>
  <Menu.Trigger asChild>
  <Link color={"#181d22"} href="#services">Services</Link>
  </Menu.Trigger>

  <Portal>
    <Menu.Positioner>
      <Menu.Content
        style={{
          backgroundColor: 'white',
          color: '#181d22',
          padding: '10px',
          borderRadius: '4px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Menu.Item>
          <Link href="#blog" style={{ color: '#181d22' }}>
            Blog
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="#faq" style={{ color: '#181d22' }}>
            FAQ
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="#support" style={{ color: '#181d22' }}>
            Support
          </Link>
        </Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
      </HStack>

      {/* Right: Social Media Icons */}
      <HStack spacing={4}>
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
    </Flex>
    </Flex>
  );
};

export default Header;
