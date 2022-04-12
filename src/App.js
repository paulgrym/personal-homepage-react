import { ThemeProvider } from "styled-components";
import HomePage from "./features/homePage/HomePage";
import { themeDark, themeLight } from "./theme";
import { GlobalStyle } from './globalStyles';
import { selectIsDarkTheme } from "./common/ThemeSwitcher/themeSlice";
import { useSelector } from "react-redux";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
