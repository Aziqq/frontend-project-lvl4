import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

import ReactDOM from 'react-dom';
import gon from 'gon';

import Chat from './application';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

ReactDOM.render(
  Chat(gon),
  document.getElementById('chat'),
);
