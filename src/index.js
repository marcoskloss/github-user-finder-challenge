import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css'
import { Routes } from './Routes'
import { UserProvider } from './contexts/UserContext'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
