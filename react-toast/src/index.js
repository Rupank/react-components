import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContextProvider } from './context/ToastContext';


ReactDOM.render(
  <React.StrictMode>
    <ToastContextProvider>
      <App />
    </ToastContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
