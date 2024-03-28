import React from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from '@chakra-ui/react';

// Define la interfaz para las props del componente
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Usa la interfaz para tipar las props
const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menú</DrawerHeader>

        <DrawerBody>
          {/* Aquí puedes añadir el contenido del menú o navegación */}
          <Button variant="outline" w="100%" mb={4}>
            Animales
          </Button>
          <Button variant="outline" w="100%" mb={4}>
            Cultivos
          </Button>
          <Button variant="outline" w="100%">
            Tareas
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
