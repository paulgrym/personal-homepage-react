import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 88px auto 0;
  text-align :center;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    margin: 44px 0 0;
  }
`

export const Paragrah = styled.p`
  color: ${({ theme }) => theme.colors.portfolio.text};
  font-weight: 400;
  font-size: 20px;
  line-height: 1,4;
  margin: 0 0 48px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    font-size: 17px;
    margin: 0 0 24px;
  }
`

export const Spinner = styled.div`
  margin: 0 auto;
  width: 160px;
  height: 160px;
  border: 11px solid ${({ theme }) => theme.colors.portfolio.spinner};
  border-right-color: ${({ theme }) => theme.colors.portfolio.spinnerColor};
  border-radius: 50%;
  animation: LoadingSpinner 1.2s linear infinite;

    @keyframes LoadingSpinner {
    to {transform: rotate(360deg);}
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
      width: 80px;
      height: 80px;
      border-width: 6px;
  }
`