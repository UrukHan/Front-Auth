import React, { useEffect } from 'react';

function Register() {
  useEffect(() => {
    window.location.href = 'https://auth.5-42-104-196.nip.io/register';
  }, []);

  return <div>Redirecting to registration...</div>;
}

export default Register;