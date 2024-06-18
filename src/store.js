import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeTogle';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});