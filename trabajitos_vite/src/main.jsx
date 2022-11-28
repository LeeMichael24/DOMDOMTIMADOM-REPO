import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from './contexts/ConfigContext';
import { UserContextProvider } from './contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';
import AppComponent from './App'
import LoadingSpinner from './components/LoadSpinner/LoadingSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT || "http://localhost:3500/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <UserContextProvider>
        <AppComponent/>
        <ToastContainer theme = 'dark' position= 'bottom-right' />
        <LoadingSpinner/>
        </UserContextProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)

//Cliente 1

//560483202227-e005tg2o3les19elj9rkl728lh2d3rc4.apps.googleusercontent.com

//Cliente 2

//560483202227-dll86bihnpq1ra89agko3cvn9fbqihd6.apps.googleusercontent.com
