import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocket';
import checkReducer from './missions/mission';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: checkReducer,
  },
});

export default store;
