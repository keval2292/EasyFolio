import { Box, Heading, Text, Button, Flex, Grid, GridItem, Icon, IconButton} from "@chakra-ui/react";
import { FiActivity } from "react-icons/fi";
import { IoEaselOutline } from "react-icons/io5";
import { BsBroadcast } from "react-icons/bs";
import { BsBoundingBoxCircles } from "react-icons/bs";

const Services = () => {
  return (
    <Box px={{ base: 4, md: 8 }} py={8} maxW="1200px" mx="auto">
      {/* Header */}
      <Heading as="h1" size="4xl" textAlign="center" mb={4}>
        Services
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
      <Text fontSize="xl" color="gray.600"  textAlign="center" mb={8}>
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur vel illum qui dolorem
      </Text>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        {/* Left Section */}
        <Box flex={1}>
          <Heading as="h2" size="4xl" mb={4}>
            Consectetur adipiscing elit sed do eiusmod tempor
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={4}>
            Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
            volutpat velit class aptent taciti sociosqu ad litora.
          </Text>
          <Button
            variant="outline"
            color="orange"
            size="md"
            borderRadius="full"
            borderColor={"orange.500"}
            px={8}
            py={4}
            _hover={{ bg: "orange.500", color: "white" }}
          >
            See all services
          </Button>
        </Box>

        {/* Right Section (Grid of Service Cards) */}
        <Box flex={2}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
            {/* Service Card 1 */}
            <GridItem>
              <Box
                p={6}
                bg="white"
                boxShadow="md"
                borderRadius="md"
                _hover={{ boxShadow: "lg" }}
              >
                <Icon  variant="ghost" color={"orange"} w={9} h={9} mb={3}><FiActivity/></Icon>
                <Heading as="h3" size="md" mt={2}>
                  Eget nulla facilisi etiam
                </Heading>
                <Text fontSize="sm" color="gray.600" mt={2}>
                  Vestibulum morbi blandit cursus risus at ultrices mi tempus
                  imperdiet nulla.
                </Text>
              </Box>
            </GridItem>

            {/* Service Card 2 */}
            <GridItem>
              <Box
                p={6}
                bg="white"
                boxShadow="md"
                borderRadius="md"
                _hover={{ boxShadow: "lg" }}
              >
               <Icon  variant="ghost" color={"orange"} w={9} h={9} mb={3}><IoEaselOutline/></Icon>
                <Heading as="h3" size="md" mt={2}>
                  Duis aute irure dolor
                </Heading>
                <Text fontSize="sm" color="gray.600" mt={2}>
                  Auctor neque vitae tempus quam pellentesque nec nam aliquam
                  sem et tortor.
                </Text>
              </Box>
            </GridItem>

            {/* Service Card 3 */}
            <GridItem>
              <Box
                p={6}
                bg="white"
                boxShadow="md"
                borderRadius="md"
                _hover={{ boxShadow: "lg" }}
              >
              <Icon  variant="ghost" color={"orange"} w={9} h={9} mb={3}><BsBroadcast/></Icon>
                <Heading as="h3" size="md" mt={2}>
                  Excepteur sint occaecat
                </Heading>
                <Text fontSize="sm" color="gray.600" mt={2}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium.
                </Text>
              </Box>
            </GridItem>

            {/* Service Card 4 */}
            <GridItem>
              <Box
                p={6}
                bg="white"
                boxShadow="md"
                borderRadius="md"
                _hover={{ boxShadow: "lg" }}
              >
                <Icon  variant="ghost" color={"orange"} w={9} h={9} mb={3}><BsBoundingBoxCircles/></Icon>
                <Heading as="h3" size="md" mt={2}>
                  Tempor incididunt ut labore
                </Heading>
                <Text fontSize="sm" color="gray.600" mt={2}>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat duis
                  aute irure dolor.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Services;
