// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider'; // Asegúrate de que este import es correcto

// Define una interfaz para las props de ProtectedRoute
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // Redirige a la página de login si no hay usuario autenticado
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
