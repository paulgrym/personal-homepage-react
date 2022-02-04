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
    word-break: break-all;
    overflow-y:scroll;
    background: ${({ theme }) => theme.colors.site.background};
    font-family: 'Inter', sans-serif;
  }
`;