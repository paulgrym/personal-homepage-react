import styled from "styled-components"

export const StyledPortfolio = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(auto, 592px));
gap: 32px;

@media (max-width: ${({ theme }) => theme.breakpoints.small}px){
  grid-template-columns: 1fr;
  gap: 16px;
}
`