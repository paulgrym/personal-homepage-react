import { Paragrah, Spinner, Wrapper } from "./styled";

const PortfolioLoading = () => {
  return (
    <Wrapper>
      <Paragrah>Please wait, projects are being loadedâ€¦</Paragrah>
      <Spinner />
    </Wrapper>
  );
};

export default PortfolioLoading;
