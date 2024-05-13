import { Container, Text, VStack } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Portfolio Overview</Text>
        <Text>Explore our diverse and innovative investments across the Nordics.</Text>
      </VStack>
    </Container>
  );
};

export default Portfolio;