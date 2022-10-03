import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App'; //export default
import {App, MiCompronente} from './App'; //cuando no es default va entre {}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MiCompronente />

  </React.StrictMode>
  
);

