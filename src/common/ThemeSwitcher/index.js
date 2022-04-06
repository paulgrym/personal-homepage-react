import { useDispatch, useSelector } from "react-redux";
import { StyledThemeSwitcher, Switcher, ThemeSwitcherText, Wrapper, SunIcon, SunBackground } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <Wrapper>
      <StyledThemeSwitcher onClick={() => dispatch(toggleTheme())}>
        <ThemeSwitcherText>
          Dark mode {isDarkTheme ? "on" : "off"}
        </ThemeSwitcherText>
        <Switcher>
          <SunBackground isDarkTheme={isDarkTheme}>
            <SunIcon />
          </SunBackground>
        </Switcher>
      </StyledThemeSwitcher>
    </Wrapper>
  );
}


export default ThemeSwitcher;