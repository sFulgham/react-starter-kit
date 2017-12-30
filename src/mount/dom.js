import React from 'react';
import ReactDom from 'react-dom';
import App from '../components/app';
import StateApi from '../api/state';

const store = new StateApi(window.initialState);

ReactDom.render(
  <App 
    store={store}
  />, 
  document.getElementById('root'));

