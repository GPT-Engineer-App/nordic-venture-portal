import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="blue.500" color="white">
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
  );
};

export default Navbar;