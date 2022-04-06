import styled from "styled-components";

export const StyledList = styled.ul`
  font-size: 18px;
  list-style:none;
  padding:0;
  margin:0;
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap: 8px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px){
    grid-template-columns:repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    font-size: 14px;
  }
`
export const ListItem = styled.li`
  font-weight: 400;
  color:${({ theme }) => theme.colors.site.text};
  display: block;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    line-height: 17px;
  }

  &:before{
    content: " ";
    background: ${({ theme }) => theme.colors.primary};
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin-right: 16px;
  }
`