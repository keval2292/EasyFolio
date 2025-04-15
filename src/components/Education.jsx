import { Box, Heading, Text, Stack ,Timeline} from "@chakra-ui/react";
import { motion } from "framer-motion";


// Motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Education = () => {
  return (
    <Box px={{ base: 4, md: 8 }} maxW="1200px" mx="auto">
      {/* Header */}
      <MotionHeading
        as="h2"
        size="3xl"
        mb={4}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        My Education
      </MotionHeading>

      {/* Description */}
      <MotionText
        fontSize="lg"
        color="gray.600"
        mb={8}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero
        sit amet adipiscing sem neque sed ipsum.
      </MotionText>

      <Stack gap={8}>
        <Timeline.Root size="lg" pb={8}>
          {[1, 2, 3].map((_, i) => (
            <MotionBox
              key={i}
              variants={fadeInUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Timeline.Item>
                <Timeline.Content width="sm">
                  <Timeline.Title whiteSpace="nowrap" fontSize="lg">
                    Etiam Industries
                  </Timeline.Title>
                  <Text fontSize="md" color="orange.500" mb={2}>
                    Jun, 2023 - Current
                  </Text>
                </Timeline.Content>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator bg="orange.500" />
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title fontSize="lg">Project Lead</Timeline.Title>
                  <Text fontSize="md" color="gray.500" mb={2}>
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto
                    quae reiciendis et quis. Eius vel ratione eius unde vitae
                    rerum voluptates asperiores voluptatem. Earum molestiae
                    consequatur neque etlon sader mart dila.
                  </Text>
                </Timeline.Content>
              </Timeline.Item>
            </MotionBox>
          ))}
        </Timeline.Root>
      </Stack>
    </Box>
  );
};

export default Education;
