import { Accordion, Span,Heading,Button,Text,Box } from "@chakra-ui/react";
import { IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const items = [
    {
      value: "1",
      title: "Non consectetur a erat nam at lectus urna duis?",
      text:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      value: "2",
      title: "Feugiat scelerisque varius morbi enim nunc faucibus?",
      text:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      value: "3",
      title: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      text:
        "Proin libero nunc consequat interdum varius sit amet mattis vulputate enim. Enim lacinia venenatis sed ullamcorper morbi tincidunt ornare massa eget.",
    },
    {
      value: "4",
      title: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
      text:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      value: "5",
      title: "Perspiciatis quo quo quos nulla quo illum ullam?",
      text:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
    },
  ];

  return (
    <Box px={{ base: 4, md: 8 }} py={8} maxW="1200px" mx="auto">
      {/* Header */}
      <Heading as="h1" size="4xl" textAlign="center" mb={4}>
        Frequently Asked Questions
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
      <Text fontSize="lg" color="gray.600" textAlign="center" mb={8}>
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem
      </Text>

      {/* Accordion */}
      <Accordion.Root collapsible defaultValue={["1"]} variant="plain">
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.value} p={4} mb={4} borderRadius="md" boxShadow="md">
            <Accordion.ItemTrigger>
              <Text  flex="1" fontSize={"xl"} pb={2} pt={5} fontWeight="bold" color={item.value === "1" ? "orange.500" : "inherit"}>
                {item.title}
              </Text>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      {/* Scroll Up Button (Floating Action Button) */}
      <Button
        aria-label="Scroll Up"
        icon={<IoIosArrowUp />}
        bg="orange.500"
        color="white"
        size="md"
        position="fixed"
        bottom={4}
        right={4}
        _hover={{ bg: "orange.600" }}
      />
    </Box>
  );
};

export default FAQ;