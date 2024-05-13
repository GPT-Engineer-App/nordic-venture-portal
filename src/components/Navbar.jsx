import { Container, Text, Link, Flex, Spacer, Box } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="green.500" color="white">
        <Box p="2">
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
            Nordic Ventures
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/portfolio" p="4">
            Portfolio
          </Link>
          <Link as={RouterLink} to="/areas-of-interest" p="4">
            Areas of Interest
          </Link>
        </Box>
      </Flex>
      <Container as="footer" maxW="full" mt={10} py={5} bg="green.500" color="white" centerContent>
        <Text fontSize="sm" textAlign="center">
          © 2023 Nordic Ventures. All rights reserved.
        </Text>
        <Text fontSize="sm" mt={2}>
          <Link href="/privacy-policy" color="whiteAlpha.800" _hover={{ color: "whiteAlpha.600" }}>
            Privacy Policy
          </Link>
        </Text>
        <Text fontSize="sm" mt={2}>
          Contact us at: <Link href="mailto:contact@nordicventures.com" color="whiteAlpha.800" _hover={{ color: "whiteAlpha.600" }}>
            contact@nordicventures.com
          </Link>
        </Text>
      </Container>
    </>
  );
};

export default Navbar;