import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Importar los componentes de las diferentes páginas
import Inicio from '../pages/Inicio';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import Dashboard from '../pages/Dashboard';
import NewLicence from '../pages/NewLicence';
import NewCar from '../pages/NewCar';
import PrivateRoute from './PrivateRoute'; // Asegúrate de que la ruta sea correcta

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para el inicio */}
        <Route path="/inicio" element={<Inicio />} />
        
        {/* Ruta para login */}
        <Route path="/auth/login" element={<Login />} />
        
        {/* Ruta para signup */}
        <Route path="/auth/signup" element={<Signup />} />
        
        {/* Ruta protegida para el dashboard */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        
        {/* Ruta para nueva licencia */}
        <Route path="/newLicence" element={
          <PrivateRoute>
            <NewLicence />
          </PrivateRoute>
        } />
        
        {/* Ruta para nuevo vehículo */}
        <Route path="/newCar" element={
          <PrivateRoute>
            <NewCar />
          </PrivateRoute>
        } />
        
        {/* Redirigir a /inicio si la ruta está vacía */}
        <Route path="/" element={<Navigate to="/inicio" />} />
        
        {/* Catch-all: Redirigir a /inicio si la ruta no coincide con ninguna */}
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
