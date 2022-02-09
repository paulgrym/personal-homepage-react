import { StyledThemeSwitcher, Switcher, ThemeSwitcherText, Wrapper, SunIcon, SunBackground } from "./styled";

const ThemeSwitcher = ({ toggleTheme, darkModeOn }) => (
  <Wrapper>
    <StyledThemeSwitcher onClick={toggleTheme}>
      <ThemeSwitcherText>
        Dark mode {darkModeOn ? "on" : "off"}
      </ThemeSwitcherText>
      <Switcher>
        <SunBackground darkModeOn={darkModeOn}>
          <SunIcon />
        </SunBackground>
      </Switcher>
    </StyledThemeSwitcher>
  </Wrapper>
);

export default ThemeSwitcher;