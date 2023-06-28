import React, { createContext, useState } from 'react';

// Crea el contexto
export const AuthContext = createContext();

// Crea el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar los datos de autenticación del usuario
  const [logged, setLogged] = useState(false);
  // Función para actualizar los datos de autenticación del usuario
  const updateUser = (userData) => {
    setUser(userData);
    setLogged(!logged);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logged,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
