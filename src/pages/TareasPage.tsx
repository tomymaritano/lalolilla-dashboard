import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Header } from '../components/common/Header';

const TareasPage = () => {
  return (
    <Box>
      <Header />
      <Box as="main" p={4} bg={'white'}>
        <Text fontSize="xl">Bienvenido a la plataforma de Administración del Campo</Text>
        <Text>Esta plataforma tinee como motivo de construccion simplificarnos la vida y mantener el orden en la asociacion.</Text>
        {/* Contenido adicional aquí */}
      </Box>
    </Box>
  );
};

export default TareasPage;
export {};
