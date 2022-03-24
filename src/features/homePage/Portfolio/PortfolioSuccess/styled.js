import styled from "styled-components"

export const StyledPortfolio = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(592px, 1fr));
gap: 32px;
word-break: break-word;

@media (max-width: ${({ theme }) => theme.breakpoints.small}px){
  grid-template-columns: 1fr;
  gap: 16px;
}
`