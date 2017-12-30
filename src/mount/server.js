import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../components/app';

const reactApp = () => {
  return ReactDOMServer.renderToString(
    <App />
  );
};

export default reactApp;