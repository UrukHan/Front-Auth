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
  }, []);

  const checkSession = async () => {
    try {
      const response = await fetch('https://auth.5-42-104-196.nip.io/api/session', { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          login(data.token);
        }
      }
    } catch (error) {
      console.error('Error checking session:', error);
    }
  };

  const login = (token) => {
    localStorage.setItem('token', token);
    setUser({ token });
  };

  return (
    <AuthContext.Provider value={{ user, login, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
