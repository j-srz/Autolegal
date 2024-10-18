import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './../../context/UserContext';
import { useInternetIdentity } from 'ic-use-internet-identity';

const Login = () => {
  const { login, loginStatus, identity } = useInternetIdentity();
  const { user, login: setUser } = useUser();
  const navigate = useNavigate();

  // Comprobar el estado de inicio de sesión
  useEffect(() => {
    if (identity && !user.principalId) {
      const principalId = identity.getPrincipal().toString();
      // Establecer los datos del usuario
      setUser(principalId, 'Nombre de Usuario', 'correo@example.com'); // Reemplaza estos valores según tu implementación
      navigate('/dashboard'); // Redirigir al dashboard después de iniciar sesión
    } else if (user.principalId) {
      navigate('/dashboard'); // Redirigir al dashboard si ya hay sesión activa
    }
  }, [identity, user.principalId, setUser, navigate]);

  const disabled = loginStatus === "logging-in" || loginStatus === "success";
  const text = loginStatus === "logging-in" ? "Logging in..." : "Login";

  return (
    <div>
      <button onClick={login} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Login;
