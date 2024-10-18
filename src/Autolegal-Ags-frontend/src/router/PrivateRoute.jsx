// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './../context/UserContext'; 

const PrivateRoute = ({ children }) => {
  const { user } = useUser(); // Accede al contexto de usuario

  return user.principalId ? children : <Navigate to="/inicio" />;
};

export default PrivateRoute;
