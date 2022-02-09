import styled from "styled-components";

export const StyledFooter = styled.footer`
  max-width:691px;
`

export const CallToAction = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 1,3;
  text-transform: uppercase;
  color:${({ theme }) => theme.colors.site.text};
  margin: 120px 0 24px;
  letter-spacing: initial;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    margin: 48px 0 12px;
  }
`;

export const Contact = styled.address`
  font-style:unset;
`

export const ContactLink = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color:${({ theme }) => theme.colors.textPrimary};
  margin:0 0 24px;
  display:inline-block;
  text-decoration:none;
  transition: color 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    margin:0 0 12px;
    font-size: 18px;
    line-height: 22px;
  }

  &:hover{
    color:${({ theme }) => theme.colors.primary};
  }

  &:active{
    color:${({ theme }) => theme.colors.primary};
    filter: brightness(115%);
  }
`;

export const Content = styled.p`
  font-size: 18px;
  line-height: 1,4;
  color:${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    margin:0 0 24px;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Socials = styled.ul`
  display:flex;
  padding:0;
  list-style:none;
  margin:0;
`

export const Item = styled.li`
  margin-right: 24px;
`

export const Link = styled.a`
  text-decoration:none; 
  color:${({ theme }) => theme.colors.textPrimary};

  &:hover{
    color:${({ theme }) => theme.colors.primary};
  }

  &:active{
    color:${({ theme }) => theme.colors.primary};
    filter: brightness(115%);
  }
`

export const StyledIcon = Icon => styled(Icon)`

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
      width:32px;
    }
`