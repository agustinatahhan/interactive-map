import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOblast: null,
};

const oblastSlice = createSlice({
  name: 'oblast',
  initialState,
  reducers: {
    selectOblast: (state, action) => {
      state.selectedOblast = action.payload;
    },
  },
});

export const { selectOblast } = oblastSlice.actions;

const store = configureStore({
  reducer: oblastSlice.reducer,
});

export default store;
