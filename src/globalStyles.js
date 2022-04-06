import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    margin: 24px 16px 48px;
    overflow-y:scroll;
    background: ${({ theme }) => theme.colors.site.background};
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.05em;
    transition: 0.5s ease;
    overflow-wrap: anywhere;

    @media (max-width:${({ theme }) => theme.breakpoints.small}px){
      margin: 20px 16px 28px;
    }
  }
`;