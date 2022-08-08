import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reducer } from './reducer';

const store = configureStore({
  reducer: { reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;