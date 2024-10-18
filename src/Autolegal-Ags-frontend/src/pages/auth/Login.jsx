import React from 'react';
import { useInternetIdentity } from 'ic-use-internet-identity'; // Asegúrate de que el hook esté correctamente importado

const Login = () => {
  const { login, loginStatus } = useInternetIdentity();

  // Definir el estado de los botones según el estado de inicio de sesión
  const disabled = loginStatus === "logging-in" || loginStatus === "success";
  const text = loginStatus === "logging-in" ? "Logging in..." : "Login";

  return (
    <button onClick={login} disabled={disabled}>
      {text}
    </button>
  );
};

export default Login;
