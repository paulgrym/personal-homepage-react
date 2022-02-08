import { useState } from "react";
import { ThemeProvider } from "styled-components";
import HomePage from "./features/homePage/HomePage";
import { themeDark, themeLight } from "./theme";
import { GlobalStyle } from './globalStyles';

const App = () => {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const toggleTheme = () => setDarkModeOn(darkModeOn => !darkModeOn)
  return (
    <>
      <ThemeProvider theme={darkModeOn ? themeDark : themeLight}>
        <GlobalStyle />
        <HomePage toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>

  );
};

export default App;
