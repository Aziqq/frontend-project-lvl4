import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

import Chat from './application';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

Chat();
