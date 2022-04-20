import styled from "styled-components";

export const StyledList = styled.ul`
  font-size: 18px;
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
  color:${({ theme }) => theme.colors.site.text};
  line-height: 1.4;
  list-style:none;
  padding-left: 25px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    line-height: 17px;
  }

  &:before{
    content: " ";
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translate(0px, -50%);
    background: ${({ theme }) => theme.colors.primary};
    width: 9px;
    height: 9px;
    border-radius: 50%;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
      width: 6px;
      height: 6px;
    }
  }
`