import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/components/app';

const reactApp = () => {
  return ReactDOMServer.renderToString(
    <App />
  );
};

export default reactApp;