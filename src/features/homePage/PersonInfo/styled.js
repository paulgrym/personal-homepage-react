import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./images/envelope.svg";

export const Header = styled.header`
  margin: -28px 0 72px;
  max-width: 1089px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    gap: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    gap: 12px;
    grid-template-columns: 1fr;
    margin: -15px 0 48px;
  }
`;

export const Photo = styled.img`
  width: 40vw;
  max-width: 384px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    min-width: 128px;
  }
`;

export const Introduction = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.site.text};
  margin: 64px 0 12px;
  letter-spacing: initial;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin: 16px 0 8px;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin: 0 0 16px;
    font-size: 22px;
  }
`;

export const Content = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.site.text};
  margin: 0 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin: 0 0 24px;
    font-size: 17px;
  }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
  color: ${({ theme }) => theme.colors.buttonLink.text};
  margin-right: 18px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-right: 14px;
    height: 22px;
  }
`;
