import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "Export tempor illum tamen malis malis eram quaerat irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      name: "Sara Wilson",
      designation: "Designer",
      avatar: "https://placehold.co/600x400",
    },
    {
      id: 2,
      quote:
        "Dolorem excepturi esse qui amet maxime quibusdam aut repellendus voluptatum. Corrupti enim a repellat cumque est laborum fuga consequuntur. Dolorem nostrum deleniti quis voluptatem iure dolorum rerum.",
      name: "John Doe",
      designation: "Developer",
      avatar: "https://placehold.co/600x400",
    },
    {
      id: 3,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "Emily Brown",
      designation: "Manager",
      avatar: "https://placehold.co/600x400",
    },
  ];

  // State to manage active testimonial
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to navigate testimonials
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Get current testimonial
  const currentTestimonial = testimonials[activeIndex];

  return (
    <Box px={{ base: 4, md: 8 }} bg={"#faf9fb"} py={8} mx="auto">
      {/* Header with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and off-screen
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and slide into view
        viewport={{ once: true }} // Only trigger animation once
        transition={{ duration: 0.5 ,ease: "easeOut"}} // Set the duration of the animation
      > 
        <Heading as="h1" size="4xl" textAlign="center" mb={4}>
          Testimonials
        </Heading>
      </motion.div>
      <Box
        w="150px"
        h="0.25rem"
        bg="orange.500"
        mx="auto"
        mb={4}
        borderRadius="full"
      />

      {/* Description with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }} // Adding a small delay
      >
        <Text fontSize="lg" color="gray.600" textAlign="center" mb={8}>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur vel illum qui dolorem
        </Text>
      </motion.div>

      {/* Testimonial Card with Scroll Animation */}
      <motion.div
        key={currentTestimonial.id}
        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up when in view
        viewport={{ once: true }} // Trigger animation once
        transition={{ duration: 0.7 }} // Duration of animation
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          p={{ base: 4, md: 8 }}
          maxW="1400px"
          mx="auto"
          bg="white"
          boxShadow="md"
          borderRadius="lg"
        >
          {/* Testimonial Content */}
          <Box flex={2} mr={{ md: 8 }} mt={{ base: 4, md: 0 }}>
            <Heading>{currentTestimonial.name}</Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              mb={4}
              alignSelf="flex-start"
            >
              {currentTestimonial.quote}
            </Text>
            <HStack align="flex-start" mt={4}>
              <Image
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                boxSize={{ base: "40px", md: "50px" }}
                rounded="full"
                mr={2}
                objectFit="cover"
              />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                <Text fontWeight="bold" alignSelf="flex-start">
                  {currentTestimonial.name}
                </Text>
                <Text fontSize="sm" color="gray.600" alignSelf="flex-start">
                  {currentTestimonial.designation}
                </Text>
              </Box>
            </HStack>
          </Box>

          {/* Avatar Image */}
          <Box display={{ base: "none", md: "block" }}>
            <Image
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              boxSize="300px"
              rounded="md"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </motion.div>

      {/* Slider Navigation */}
      <Flex justifyContent="center" gap={4} mt={6}>
        <Button
          variant="outline"
          colorScheme="gray"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          borderRadius={"full"}
          size="lg"
          aria-label="Previous Testimonial"
          _hover={{ bg: "orange.500", color: "white" }}
          _disabled={{ bg: "gray.300", color: "gray.500" }}
        >
          <Icon as={IoChevronBack} />
        </Button>
        <Button
          variant="outline"
          colorScheme="gray"
          onClick={handleNext}
          disabled={activeIndex === testimonials.length - 1}
          borderRadius={"full"}
          size="lg"
          aria-label="Next Testimonial"
          _hover={{ bg: "orange.500", color: "white" }}
        >
          <Icon as={IoChevronForward} />
        </Button>
      </Flex>
    </Box>
  );
};

export default Testimonials;
