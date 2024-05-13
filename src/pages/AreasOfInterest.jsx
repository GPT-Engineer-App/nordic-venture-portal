import { Container, Text, VStack } from "@chakra-ui/react";

const AreasOfInterest = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Areas of Interest</Text>
        <Text>We focus on sectors such as technology, healthcare, and green energy to drive innovation and growth.</Text>
      </VStack>
    </Container>
  );
};

export default AreasOfInterest;