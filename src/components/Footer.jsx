import { Box, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box as="footer" width="full" bg="blue.500" color="white" p={4} textAlign="center">
      <Text fontSize="sm">© 2023 Nordic Ventures. All rights reserved.</Text>
      <Link as={RouterLink} to="/privacy-policy" p={2} fontSize="sm">
        Privacy Policy
      </Link>
      <Text fontSize="sm">Contact us: info@nordicventures.com</Text>
    </Box>
  );
};

export default Footer;