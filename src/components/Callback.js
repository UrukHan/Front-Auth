import React, { useEffect, useContext } from 'react';
import AuthContext from '../AuthContext';

function Callback() {
  const { login } = useContext(AuthContext);

  useEffect(() => {
    fetch('https://auth.5-42-104-196.nip.io/api/session', { credentials: 'include' })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          login(data.token);
          window.location.href = '/';
        } else {
          console.error('No token received');
        }
      })
      .catch(error => {
        console.error('Error fetching session:', error);
      });
  }, [login]);

  return <div>Loading...</div>;
}

export default Callback;
