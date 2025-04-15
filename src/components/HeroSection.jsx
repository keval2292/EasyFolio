import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  VStack,
  HStack,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion-enabled Chakra components
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.3 },
  },
};

const HeroSection = () => {
  return (
    <Box bg="white" p={6}  overflow="hidden">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
      >
        {/* Left Section */}
        <MotionBox
          w={{ base: "100%", md: "50%" }}
          maxW="550px"
          py={4}
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <VStack spacing={4} alignItems="flex-start">
            <MotionText
              fontSize="5xl"
              fontWeight="bold"
              color="blue.800"
              variants={fadeInVariant}
            >
              Crafting Digital Experiences with Passion
            </MotionText>

            <MotionText
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              variants={fadeInVariant}
              transition={{ delay: 0.1 }}
            >
              Transforming ideas into elegant solutions through creative
              design and innovative development
            </MotionText>

            {/* Buttons */}
            <MotionBox
              variants={fadeInVariant}
              transition={{ delay: 0.2 }}
              w="100%"
            >
              <HStack spacing={4} py={5}>
                <Button
                  bg="orange.500"
                  px={4}
                  borderRadius="full"
                  variant="solid"
                >
                  View My Work
                </Button>
                <Button
                  colorScheme="orange"
                  variant="outline"
                  borderColor="orange.600"
                  color="orange.500"
                  px={4}
                  borderRadius="full"
                >
                  Let's Connect
                </Button>
              </HStack>
            </MotionBox>

            {/* Stats */}
            <MotionBox
              variants={fadeInVariant}
              transition={{ delay: 0.3 }}
              w="100%"
            >
              <HStack spacing={8} py={5} gap={8} alignItems="flex-start">
                {[
                  { label: "Years Experience", value: "5+" },
                  { label: "Projects Completed", value: "100+" },
                  { label: "Happy Clients", value: "50+" },
                ].map((stat, index) => (
                  <VStack key={index} alignItems="flex-start">
                    <Text fontSize="4xl" fontWeight="bold" color="blue.800">
                      {stat.value}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {stat.label}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </MotionBox>
          </VStack>
        </MotionBox>

        {/* Right Section */}
        <Spacer />
        <MotionBox
          w={{ base: "100%", md: "50%" }}
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Center h="100%">
            <MotionImage
              src="/developer-working.webp"
              alt="Developer working"
              maxH="500px"
              w="100%"
            />
          </Center>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default HeroSection;
