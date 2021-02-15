import { createSlice } from '@reduxjs/toolkit';

import { actions as channelsActions } from './channelsSlice';

const slice = createSlice({
  name: 'messagesInfo',
  initialState: { messages: [] },
  reducers: {
    addMessage(state, { payload }) {
      const { attributes } = payload;
      state.messages.push(attributes);
    },
  },
  extraReducers: {
    [channelsActions.deleteChannel.type](state, { payload }) {
      const { id } = payload;
      const messages = state.messages.filter((message) => message.channelId !== id);
      return { messages };
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
