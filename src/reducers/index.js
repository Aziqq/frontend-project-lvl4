import { createReducer } from '@reduxjs/toolkit';
import addMessage from '../actions';

const messages = createReducer([], {
  [addMessage]: (state, { payload }) => { state.push(payload); },
});

export default messages;
