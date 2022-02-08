import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    margin: 16px;
    overflow-y:scroll;
    background: ${({ theme }) => theme.colors.site.background};
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.05em;

  }
`;