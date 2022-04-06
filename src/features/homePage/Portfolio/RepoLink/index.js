import styled from "styled-components";

export const RepoLink = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.tile.link}; 
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tile.linkUnderline};

  &:hover{
    border-bottom-color: ${({ theme }) => theme.colors.tile.linkUnderlineHover};
  }
`