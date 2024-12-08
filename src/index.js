import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Add this import
import App from './App';
import { ActiveSectionProvider } from './context/ActiveSectionContext.jsx';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>      {/* Add this wrapper */}
      <ActiveSectionProvider>
        <App />
      </ActiveSectionProvider>
    </BrowserRouter>     {/* Close wrapper */}
  </React.StrictMode>
);