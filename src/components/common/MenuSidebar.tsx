import React from 'react';
import { Box, VStack, Link, useColorModeValue, Text, Divider, Icon } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { RiHome2Line, RiPlantLine, RiTaskLine } from 'react-icons/ri'; // Importa íconos
import { GiAnimalSkull } from "react-icons/gi";
import { MdContacts, MdOutlineSpaceDashboard } from "react-icons/md";


const MenuSidebar = () => {
    const bgColor = useColorModeValue('white', 'gray.900');
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <Box as="nav" w="250px" h={'100%'} p="3" bg={bgColor}>
            <VStack align="stretch" >
                <Text textAlign={'center'} fontSize={'2xl'} fontWeight={'600'}>La Lolilla <Text fontWeight={'400'} fontSize={'sm'}>Reserva natural</Text></Text>
                <Divider m={4} w={'90%'} />
                <Box display={'flex'}   alignItems={'center'} pr={2} pl={2} >
                    <Icon as={MdOutlineSpaceDashboard} mr={2} />Dashboard
                </Box>
                <Divider m={4} w={'90%'} />
                <Link p={2} _hover={{ bg: 'blue.200' }} as={RouterLink} to="/homepage" color={isActive('/') ? 'blue.500' : undefined}>
                    <Icon as={RiHome2Line} mr={2} />Inicio
                </Link>
                <Link p={2} _hover={{ bg: 'blue.200' }} as={RouterLink} to="/animales" color={isActive('/animales') ? 'blue.500' : undefined}>
                    <Icon as={GiAnimalSkull} mr={2} />Animales
                </Link>
                <Link p={2} _hover={{ bg: 'blue.200' }} as={RouterLink} to="/cultivos" color={isActive('/cultivos') ? 'blue.500' : undefined}>
                    <Icon as={RiPlantLine} mr={2} />Cultivos
                </Link>
                <Link p={2} _hover={{ bg: 'blue.200' }} as={RouterLink} to="/tareas" color={isActive('/tareas') ? 'blue.500' : undefined}>
                    <Icon as={RiTaskLine} mr={2} />Tareas
                </Link>
                <Divider m={4} w={'90%'} />
                <Box display={'flex'}   alignItems={'center'} pr={2} pl={2} >
                    <Icon as={MdContacts} mr={2} />Contactos
                </Box>
                <Divider m={4} w={'90%'} />
            </VStack>
        </Box>
    );
};

export default MenuSidebar;
