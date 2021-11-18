import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/my-data">
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

