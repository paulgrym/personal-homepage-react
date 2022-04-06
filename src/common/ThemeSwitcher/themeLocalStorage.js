const localStorageKey = "theme";

export const saveThemeInLocalStorage = isDarkTheme =>
  localStorage.setItem(localStorageKey, JSON.stringify(isDarkTheme));

export const getTasksFromLocaleStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || false;
