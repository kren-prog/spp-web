import React, { createContext, useState, useEffect } from 'react';

// Crea el contexto
export const AuthContext = createContext();

// Crea el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return localStorage.getItem('username') || '';
  }); // Estado para almacenar los datos de autenticación del usuario
  const [logged, setLogged] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    // Almacenar el estado actual de isLoggedIn en localStorage
    localStorage.setItem('isLoggedIn', logged);
    localStorage.setItem('username', user);
  }, [logged, user]);
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
