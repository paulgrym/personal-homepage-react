import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocaleStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: getTasksFromLocaleStorage(),
  },

  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const {
  toggleTheme,
} = themeSlice.actions;

const selectTheme = (state) => state.theme;

export const selectIsDarkTheme = (state) => selectTheme(state).isDarkTheme;

export const themeReducer = themeSlice.reducer;
