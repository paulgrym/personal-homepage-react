import styled, { css } from "styled-components";
import { ReactComponent as Sun } from "../../images/sun.svg"

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StyledThemeSwitcher = styled.button`
  color: ${({ theme }) => theme.colors.themeSwitcher.text};
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: initial;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  outline-offset: 8px;
`

export const ThemeSwitcherText = styled.span`
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    display: none;
  }
`

export const Switcher = styled.span`
  width: 48px;
  padding: 3px;
  border-radius: 13px;
  border: 1px solid ${({ theme }) => theme.colors.themeSwitcher.border};
  background: ${({ theme }) => theme.colors.themeSwitcher.background};
  display: flex;
  justify-content: flex-start;
`

export const SunBackground = styled.span`
  background: currentColor;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.3s ease-in;

  ${({ darkModeOn }) => darkModeOn && css`
    transform: translateX(20px);
  `}
`

export const SunIcon = styled(Sun)`
    color: ${({ theme }) => theme.colors.themeSwitcher.icon};
`