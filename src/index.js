import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { gridTheme } from './theme';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GridThemeProvider gridTheme={gridTheme}>
      <Router>
        <App />
      </Router>
    </GridThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
