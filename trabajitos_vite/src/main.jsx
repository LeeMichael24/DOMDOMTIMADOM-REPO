import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="560483202227-e005tg2o3les19elj9rkl728lh2d3rc4.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
      <ToastContainer theme = 'dark' position= 'bottom-right' />
    </BrowserRouter>
  </React.StrictMode>
)

//Cliente 1

//560483202227-e005tg2o3les19elj9rkl728lh2d3rc4.apps.googleusercontent.com

//Cliente 2

//560483202227-dll86bihnpq1ra89agko3cvn9fbqihd6.apps.googleusercontent.com
