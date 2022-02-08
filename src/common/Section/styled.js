import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 32px;
  margin-bottom:72px;
  background:${({ theme }) => theme.colors.boxBackground};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const Title = styled.h2`
  margin:0;
  font-size:30px;
  line-height: 36px;
  font-weight:900;
  letter-spacing: 0.05em;
  padding-bottom:15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.titleUnderline};
  color:${({ theme }) => theme.colors.textPrimary};
`;

