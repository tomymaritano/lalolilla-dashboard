import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimalesPage from './pages/AnimalesPage';
import CultivosPage from './pages/CultivosPage';
import TareasPage from './pages/TareasPage';
import MenuSidebar from './components/common/MenuSidebar';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex>
          <MenuSidebar />
          <Flex bg={'gray.200'} w={'100vw'} h={'100vh'}  as="main" p={1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/animales" element={<AnimalesPage />} />
              <Route path="/cultivos" element={<CultivosPage />} />
              <Route path="/tareas" element={<TareasPage />} />
              {/* Añade más rutas según sea necesario */}
            </Routes>
          </Flex>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
