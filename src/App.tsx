// App.js o App.jsx

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimalesPage from './pages/AnimalesPage';
import CultivosPage from './pages/CultivosPage';
import TareasPage from './pages/TareasPage';
import Login from './components/Form/Login';
import { AuthProvider } from './AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import Layout from './components/Layout'; // Importa el nuevo componente de layout
import './firebaseConfig'

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Routes>
              <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/homepage" element={
              <ProtectedRoute>
                <Layout><HomePage /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/animales" element={
              <ProtectedRoute>
                <Layout><AnimalesPage /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/cultivos" element={
              <ProtectedRoute>
                <Layout><CultivosPage /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/tareas" element={
              <ProtectedRoute>
                <Layout><TareasPage /></Layout>
              </ProtectedRoute>
            } />
            {/* Añade más rutas protegidas como sea necesario */}
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
