import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from '@/pages/MainPage';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <MainPage />
  </BrowserRouter>,
  document.getElementById('root'),
);
