import React from 'react';
import { Box, Flex, Heading, IconButton, Button, HStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
  onOpen: () => void;
}

const NavBar = ({ onOpen }: NavBarProps) => {
  const navigate = useNavigate();

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.800" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          Admin Campo
        </Heading>
      </Flex>

      {/* Botón para abrir el menú en dispositivos móviles */}
      <Box display={{ base: 'block', md: 'none' }} onClick={onOpen}>
        <IconButton
          aria-label="Abrir menú"
          icon={<HamburgerIcon />}
          variant="outline"
          onClick={onOpen}
        />
      </Box>

      {/* En lugar de usar Link de Chakra UI, utiliza Button o cualquier otro componente y maneja la navegación con useNavigate */}
      <HStack gap={1}>
        <Button colorScheme='facebook' onClick={() => navigate("/")} px={2}>
          Home
        </Button>
        <Button colorScheme='facebook' onClick={() => navigate("/animales")} px={2}>
          Animales
        </Button>
        <Button colorScheme='facebook' onClick={() => navigate("/cultivos")} px={2}>
          Cultivos
        </Button>
        <Button colorScheme='facebook' onClick={() => navigate("/tareas")} px={2}>
          Tareas
        </Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
