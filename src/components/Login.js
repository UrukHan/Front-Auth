import React, { useEffect } from 'react';

function Login() {
  useEffect(() => {
    window.location.href = 'https://auth.5-42-104-196.nip.io/login';
  }, []);

  return <div>Redirecting to login...</div>;
}

export default Login;