import { ReactComponent as PortfolioIcon } from "./portfolio.svg";
import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-bottom: 48px;
  }
`;

export const Header = styled.header`
  margin: 24px auto 24px;
  text-align: center;
`;

export const Icon = styled(PortfolioIcon)`
  height: auto;
  margin: 0 0 13px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 32px;
  }
`;

export const Subheader = styled.h2`
  margin: 0 0 8px;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin: 0 0 16px;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 17px;
  }
`;
