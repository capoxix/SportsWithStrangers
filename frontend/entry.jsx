import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPI from './util/session_api_util';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.logout = SessionAPI.logout;
  window.login = SessionAPI.login;
  window.store = configureStore();
  ReactDOM.render(<h1>WELCOME!!!!!! </h1>, root);
});
