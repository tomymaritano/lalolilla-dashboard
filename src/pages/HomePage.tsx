import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';

const HomePage = () => {
  return (
    <Box h={'100vh'}>
      <Header />
      <Box w={'90vw'} h={'80vh'} as="main" p={4}>
        <Text fontSize="xl">Bienvenido a la plataforma de Administración del Campo</Text>
        {/* Contenido adicional aquí */}
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
