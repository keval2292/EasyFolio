import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Grid,
  Card,
  Image,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);
const MotionCard = motion(Card.Root);

// Sample data
const projects = [
  {
    id: 1,
    category: "Web Design",
    title: "Modern Dashboard Interface",
    description:
      "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.",
    image: "https://placehold.co/600",
  },
  {
    id: 2,
    category: "Graphics",
    title: "Creative Brand Identity",
    description:
      "Vestibulum id ligula porta felis euismod semper semper at vulputate.",
    image: "https://placehold.co/600",
  },
  {
    id: 3,
    category: "Motion",
    title: "Animated Intro",
    description:
      "Lorem ipsum dolor sit amet, consectetur semper adipiscing elit.",
    image: "https://placehold.co/600",
  },
  {
    id: 4,
    category: "Branding",
    title: "Logo Design",
    description: "Nullam quis risus eget urna mollis ornare semper vel eu leo.",
    image: "https://placehold.co/600",
  },
  {
    id: 5,
    category: "Web Design",
    title: "Modern Dashboard Interface",
    description:
      "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.",
    image: "https://placehold.co/600",
  },
  {
    id: 6,
    category: "Graphics",
    title: "Creative Brand Identity",
    description:
      "Vestibulum id ligula porta felis euismod semper semper at vulputate.",
    image: "https://placehold.co/600",
  },
];


const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Work");

  const filteredProjects =
    selectedCategory === "All Work"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const buttonName = [
    "All Work",
    "Web Design",
    "Graphics",
    "Motion",
    "Branding",
  ];

  return (
    <Box px={{ base: 4, md: 8 }} py={8} maxW="1200px" mx="auto">
      {/* Header */}
      <Heading as="h1" size="4xl" textAlign="center" mb={4}>
        Portfolio
      </Heading>
      <Box
        w="150px"
        h="0.25rem"
        bg="orange.500"
        mx="auto"
        mb={4}
        borderRadius="full"
      />

      {/* Description */}
      <Text fontSize="xl" color="gray.600" textAlign="center" mb={8}>
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur vel illum qui dolorem
      </Text>

      {/* Tabs */}
      <Flex justifyContent="center" mb={6} gap={4} flexWrap="wrap">
        {buttonName.map((name, index) => (
          <Button
            key={index}
            variant={selectedCategory === name ? "solid" : "ghost"}
            bg={selectedCategory === name ? "#f97316" : "white"}
            color={selectedCategory === name ? "white" : "black"}
            px={4}
            py={2}
            borderRadius="full"
            fontStyle={"bold"}
            _hover={{ bg: "orange.100", color: "#f97316" }}
            onClick={() => setSelectedCategory(name)}
          >
            {name}
          </Button>
        ))}
      </Flex>

      {/* Animated Grid */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={4}
        justifyItems="center"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <MotionCard
              key={project.id}
              maxW={{ lg: "lg", md: "md", sm: "sm" }}
              w={{ lg: "lg", sm: "sm", md: "md" }}
              overflow="hidden"
              boxShadow="md"
              borderRadius="md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              layout
            >
              <Image
                src={project.image}
                alt={project.title}
                objectFit="cover"
                height="300px"
                width="100%"
              />
              <Card.Body p={4}>
                <Text fontWeight="bold" color="orange.500">
                  {project.category}
                </Text>
                <Card.Title fontSize="lg" mt={2}>
                  {project.title}
                </Card.Title>
                <Card.Description fontSize="sm" color="gray.600" mt={2}>
                  {project.description}
                </Card.Description>
              </Card.Body>
            </MotionCard>
          ))}
        </AnimatePresence>
      </Grid>
    </Box>
  );
};

export default Portfolio;
