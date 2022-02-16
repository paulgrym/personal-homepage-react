import styled from "styled-components";

export const Image = styled.img`
  margin-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    margin-left: 12px;
    width: 18px;
`