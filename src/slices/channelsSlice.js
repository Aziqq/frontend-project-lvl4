import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'channelsInfo',
  initialState: { channels: [], currentChannelId: 1 },
  reducers: {
    addChannel(state, { payload }) {
      state.channels.push(payload.attributes);
    },
    deleteChannel(state, { payload }) {
      const { id } = payload;
      const channels = state.channels.filter((ch) => ch.id !== id);
      const currentChannelId = id === 1 ? 1 : state.currentChannelId;
      return { channels, currentChannelId };
    },
    renameChannel(state, { payload }) {
      const { attributes } = payload;
      const channel = state.channels.find((ch) => ch.id === attributes.id);
      channel.name = attributes.name;
    },
    switchChannel(state, { payload }) {
      return { ...state, currentChannelId: payload };
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
