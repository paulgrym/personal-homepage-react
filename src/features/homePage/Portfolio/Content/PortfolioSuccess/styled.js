import styled from "styled-components";

export const StyledPortfolio = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(592px, 1fr));
  gap: 32px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
export const Paragraph = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1.5;
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 17px;
    margin: 0 0 16px;
  }
`;
