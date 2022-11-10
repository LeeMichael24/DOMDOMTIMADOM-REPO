import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary';

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="<560483202227-e005tg2o3les19elj9rkl728lh2d3rc4.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>;

  </React.StrictMode>
)


//560483202227-e005tg2o3les19elj9rkl728lh2d3rc4.apps.googleusercontent.com