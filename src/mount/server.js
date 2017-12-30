import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from '../../build/config';
import axios from 'axios';
import StateApi from '../api/state';
import App from '../components/app';

const reactApp = async () => {
  const accountData = await axios.get(`http://${config.host}:${config.port}/accounts`);
  const postsData = await axios.get(`http://${config.host}:${config.port}/posts`);
  const store = new StateApi({
    accounts: accountData.data.accounts,
    posts: postsData.data.posts
  });

  const initialState = {
    accounts: accountData.data.accounts,
    posts: postsData.data.posts
  };

  return {
    initialDom: ReactDOMServer.renderToString(<App store={store} />),
    initialState 
  };
};

export default reactApp;