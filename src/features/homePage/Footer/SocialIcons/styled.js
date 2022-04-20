import styled from "styled-components";

export const StyledSocialIcons = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
`;

export const Item = styled.li`
  margin-right: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-right: 16px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary};
    filter: brightness(115%);
  }
`;

export const styleIcon = (Icon) => styled(Icon)`
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 32px;
  }
`;
