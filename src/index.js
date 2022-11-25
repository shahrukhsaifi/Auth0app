import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { Auth0Provider } from "@auth0/auth0-react";
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-j25f3z8aahlbqf64.us.auth0.com"
    clientId="tpUecxx3DAJruTOk8wE4QHRZIArd5Fv0"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
);

