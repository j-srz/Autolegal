import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import AppRouter from './router/AppRouter';
import { InternetIdentityProvider } from 'ic-use-internet-identity';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InternetIdentityProvider>
      <AppRouter />
    </InternetIdentityProvider>
  </React.StrictMode>,
);
