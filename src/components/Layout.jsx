// components/Layout.js o Layout.jsx

import React from 'react';
import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { Footer } from './common/Footer';
import MenuSidebar from './common/MenuSidebar';

const Layout = ({ children }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');

  return (
    <Grid
      templateAreas={`"sidebar main"
                      "footer footer"`}
      gridTemplateRows={'1fr auto'}
      gridTemplateColumns={'250px 1fr'}
      h="100vh"
      minHeight="100vh"
    >
      <GridItem area="sidebar" bg={bgColor}>
        <MenuSidebar />
      </GridItem>
      <GridItem area="main">
        {children}
      </GridItem>
      <GridItem area="footer" w="full">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
