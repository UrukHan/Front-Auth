import React, { useEffect, useContext } from 'react';
import AuthContext from '../AuthContext';

function Logout() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    console.log('Current user before logout:', user);
    
    localStorage.removeItem('token');
    document.cookie = "auth-session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "other-auth-cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUser(null);
    
    console.log('Current user after logout:', user);
    window.location.href = 'https://auth.5-42-104-196.nip.io/logout';
  }, [user, setUser]);

  return <div>Redirecting to logout...</div>;
}

export default Logout;