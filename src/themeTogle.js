import { createSlice } from '@reduxjs/toolkit';

export const themeTogle = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeTogle.actions;

export default themeTogle.reducer;