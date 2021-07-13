import { configureStore } from '@reduxjs/toolkit';
import tournamentReducer from '../features/tournamentSlice';
import teamsReducer from '../features/teamsSlice'

export const store = configureStore({
  reducer: {
    tournament: tournamentReducer,
    teams: teamsReducer
  },
});
