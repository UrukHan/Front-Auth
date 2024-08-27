import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    } else {
      checkSession();
    }

    // Устанавливаем интервал для проверки токена
    const interval = setInterval(checkSession, 60000);

    return () => clearInterval(interval);
  }, []);

  const checkSession = async () => {
    try {
      const response = await fetch('https://auth.5-42-104-196.nip.io/api/session', { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          login(data.token);
        } else {
          logout();
        }
      } else {
        logout();
      }
    } catch (error) {
      console.error('Error checking session:', error);
      logout();
    }
  };

  const login = (token) => {
    localStorage.setItem('token', token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
