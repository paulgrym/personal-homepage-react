import styled from "styled-components";
import { ReactComponent as ErrorSign } from "../../../../images/error.svg"

export const Wrapper = styled.div`
  margin: 88px auto 0;
  text-align: center;
  max-width: 426px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    margin: 44px auto 0;
  }
`

export const ErrorIcon = styled(ErrorSign)`
  height: auto;
  margin: 0 0 16px;
  color: ${({ theme }) => theme.colors.portfolio.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    width: 40px;
    margin: 0 0 12px;
  }
`

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.portfolio.text};
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  margin: 0 0 32px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    font-size: 20px;
    margin: 0 0 16px;
  }
`

export const Paragrah = styled.p`
  color: ${({ theme }) => theme.colors.portfolio.text};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 32px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    font-size: 17px;
    margin: 0 0 16px;
  }
`