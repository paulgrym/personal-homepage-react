import styled from "styled-components";

export const ButtonLink = styled.a`
  color: ${({ theme }) => theme.colors.buttonLink.text};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-decoration: none;
  padding: 12px 16px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  background:${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  transition: box-shadow 0.5s;
  cursor: pointer;

  &:hover{
    box-shadow: 
    2px -2px 0px ${({ theme }) => theme.colors.buttonLink.hoverShadow}, 
    -2px 2px 0px ${({ theme }) => theme.colors.buttonLink.hoverShadow}, 
    2px 2px 0px ${({ theme }) => theme.colors.buttonLink.hoverShadow}, 
    -2px -2px 0px ${({ theme }) => theme.colors.buttonLink.hoverShadow};
  }

  &:active{
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    font-size: 18px;
    line-height: 22px;
  }
`