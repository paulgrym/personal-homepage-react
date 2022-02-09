import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    margin: 119px 16px 109px;
    overflow-y:scroll;
    background: ${({ theme }) => theme.colors.site.background};
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.05em;
    transition: 0.5s ease;

    @media (max-width:${({ theme }) => theme.breakpoints.small}){
      margin: 21px 16px 31px;
    }
  }
`;