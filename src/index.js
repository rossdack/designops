import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from '@/pages/MainPage';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <CssBaseline />
    <MainPage />
  </Router>,
  document.getElementById('root'),
);
