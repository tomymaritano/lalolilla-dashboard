import React from 'react';
import { ChakraProvider, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimalesPage from './pages/AnimalesPage';
import CultivosPage from './pages/CultivosPage';
import TareasPage from './pages/TareasPage';
import { Footer } from './components/common/Footer'; // Asegúrate de importar Footer
import MenuSidebar from './components/common/MenuSidebar';

function App() {
 const bgColor = useColorModeValue('gray.100', 'gray.900');
  return (
    <ChakraProvider>
      <Router>
        <Grid
          templateAreas={`"sidebar main"
                          "footer footer"`}
          gridTemplateRows={'1fr auto'} // Auto ajusta el tamaño de la fila del footer según su contenido
          gridTemplateColumns={'250px 1fr'}
          h="100vh"
          minHeight="100vh"
        >
          <GridItem area="sidebar" bg={bgColor}>
            <MenuSidebar />
          </GridItem>
          <GridItem area="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/animales" element={<AnimalesPage />} />
              <Route path="/cultivos" element={<CultivosPage />} />
              <Route path="/tareas" element={<TareasPage />} />
              {/* Añade más rutas según sea necesario */}
            </Routes>
          </GridItem>
          <GridItem area="footer" w="full">
            <Footer />
          </GridItem>
        </Grid>
      </Router>
    </ChakraProvider>
  );
}

export default App;
