import React from 'react';
import io from 'socket.io-client';
import faker from 'faker';
import cookies from 'js-cookie';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './components/App';
import UserContext from './components/UserContext';
import addMessage from './actions';
import reducer from './reducers';

export default (initState) => {
  const preloadedState = { messages: initState.messages };

  const store = configureStore({
    reducer: { messages: reducer },
    preloadedState,
  });

  const webSocket = io();

  webSocket.on('newMessage', ({ data: { attributes } }) => {
    store.dispatch(addMessage(attributes));
  });

  const getUserName = () => {
    const userName = cookies.get('nickname');
    if (userName) {
      return userName;
    }
    const newName = faker.name.findName();
    cookies.set('nickname', newName, { expires: 30 });
    return newName;
  };

  return (
    <Provider store={store}>
      <UserContext.Provider value={getUserName()}>
        <App initState={initState} />
      </UserContext.Provider>
    </Provider>
  );
};
