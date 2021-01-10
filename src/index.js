import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

document.title = "Goldguard Bank Corp - Buy & sell Bitcoin";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


