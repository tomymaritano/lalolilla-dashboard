import React from 'react';
import { Box, VStack, Link, useColorModeValue, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// No más SidebarProps, el Sidebar es siempre visible
const MenuSidebar = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  
  return (
    <Box as="nav" w="250px" p="5" bg={bgColor}>
      <VStack align="stretch" spacing="5">
        <Text fontSize={'2xl'} fontWeight={'600'}>La Lolilla</Text>
        <Link as={RouterLink} to="/">Inicio</Link>
        <Link as={RouterLink} to="/animales">Animales</Link>
        <Link as={RouterLink} to="/cultivos">Cultivos</Link>
        <Link as={RouterLink} to="/tareas">Tareas</Link>
        {/* Añade más enlaces según sea necesario */}
      </VStack>
    </Box>
  );
};

export default MenuSidebar;
