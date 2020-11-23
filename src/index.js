/* eslint-disable react/jsx-filename-extension */

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import gon from 'gon';
import App from './Components/App';

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

ReactDOM.render(
  <App data={gon} />,
  document.getElementById('chat'),
);
