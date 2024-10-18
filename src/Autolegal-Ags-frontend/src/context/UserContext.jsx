import React, { createContext, useState, useContext } from 'react';
import { useInternetIdentity } from 'ic-use-internet-identity'; // Importar correctamente el hook

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const { identity, iiLogout } = useInternetIdentity(); // Asegúrate de importar iiLogout aquí
  const [user, setUser] = useState({
    principalId: null,
    name: '',
    email: ''
  });

  const login = (principalId, name, email) => {
    setUser({ principalId, name, email });
  };

  const logout = async () => {
    if (iiLogout) {
      await iiLogout(); // Cerrar sesión en Internet Identity
      setUser({ principalId: null, name: '', email: '' }); // Limpiar el estado del usuario
    } else {
      console.error("iiLogout is not available");
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUser = () => {
  return useContext(UserContext);
};
