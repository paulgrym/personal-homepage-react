import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 32px;
  margin-bottom:72px;
  background:${({ theme }) => theme.colors.boxBackground};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    padding:16px;
    margin-bottom:48px;
  }
`;

export const Title = styled.h2`
  margin:0 0 32px;
  font-size:30px;
  line-height: 36px;
  font-weight:900;
  padding-bottom:15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.titleUnderline};
  color:${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
    font-size:18px;
    line-height: 22px;
    padding-bottom:12px;
`;

