import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PhotoContextProvider from './Components/Context/PhotoContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'jquery/dist/jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhotoContextProvider>
      <App />
    </PhotoContextProvider>
  </React.StrictMode>
);

