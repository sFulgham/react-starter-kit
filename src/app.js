import React from 'react';
import ReactDom from 'react-dom';
import App from './components';
import Faker from './assets/jsLibs/mock.data';

let faker = new Faker();

ReactDom.render(<App />, document.getElementById('root'));

