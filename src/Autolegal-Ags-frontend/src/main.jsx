import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import AppRouter from './router/AppRouter';
import { InternetIdentityProvider } from 'ic-use-internet-identity';
import { UserProvider } from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InternetIdentityProvider>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </InternetIdentityProvider>
  </React.StrictMode>,
);
