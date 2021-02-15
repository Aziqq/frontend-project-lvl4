import React from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';
import faker from 'faker';
import cookies from 'js-cookie';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import gon from 'gon';
import App from './components/App';
import UserContext from './components/UserContext';
import rootReducer, { actions } from './slices';

const eventsActions = {
  newMessage: actions.addMessage,
  newChannel: actions.addChannel,
  removeChannel: actions.deleteChannel,
  renameChannel: actions.renameChannel,
};

const getUserName = () => {
  const userName = cookies.get('nickname');
  if (userName) {
    return userName;
  }
  const newName = faker.name.findName();
  cookies.set('nickname', newName, { expires: 30 });
  return newName;
};

export default () => {
  const { messages, channels, currentChannelId } = gon;

  const preloadedState = {
    messagesInfo: { messages },
    channelsInfo: { channels, currentChannelId },
  };

  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  const webSocket = io();

  webSocket.on('message', ({ type, data }) => {
    store.dispatch(eventsActions[type](data));
  });

  render(
    <Provider store={store}>
      <UserContext.Provider value={getUserName()}>
        <App />
      </UserContext.Provider>
    </Provider>,
    document.getElementById('chat'),
  );
};
