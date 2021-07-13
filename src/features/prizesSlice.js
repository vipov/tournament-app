import { createSlice } from '@reduxjs/toolkit';
import prizes from '../data/prizes'

export const prizesSlice = createSlice({
  name: 'prizes',
  initialState: {
    prizes: prizes
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; 
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = prizesSlice.actions;

export const selectUser = (state) => state.user.user;
export default prizesSlice.reducer;
