import React from 'react';
import  ReactDOM from "react-dom";
import "./index.css"
  // import App from './App'
  import Project from "./Project";
import './i18n.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Project />
  </React.StrictMode>
);
reportWebVitals();