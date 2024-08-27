import React, { useEffect, useContext } from 'react';
import AuthContext from '../AuthContext';

function Logout() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await fetch('https://auth.5-42-104-196.nip.io/logout', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          logout();
          window.location.href = '/login';
        } else {
          console.error('Failed to log out from server.');
        }
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

    handleLogout();
  }, [logout]);

  return <div>Redirecting to logout...</div>;
}

export default Logout;
