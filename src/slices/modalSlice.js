import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'modalInfo',
  initialState: { open: false, item: null, type: null },
  reducers: {
    openModal: (state, { payload }) => ({ ...state, open: true, ...payload }),
    closeModal: () => ({ open: false, item: null, type: null }),
  },
});

export const { actions } = slice;

export default slice.reducer;
