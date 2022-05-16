import styled from "styled-components";

export const StyledTile = styled.li`
  padding: 56px;
  background: ${({ theme }) => theme.colors.tile.background};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.tile.borderHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 14px;
    line-height: 17px;
    padding: 24px;
  }
`;
export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.tile.header};
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 16px;
    line-height: 19px;
    margin: 0 0 16px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.tile.text};
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin: 0 0 16px;
  }
`;
export const Container = styled.dl`
  display: flex;
  margin: 0 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin: 0 0 10px;
  }
`;

export const Term = styled.dt`
  color: ${({ theme }) => theme.colors.tile.text};
  margin-right: 8px;
  max-width: 60px;
  width: 100%;
`;
export const LinkItem = styled.dd`
  margin: 0;
`;
