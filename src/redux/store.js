import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocket';
import missionReducer from './missions/Mission';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
