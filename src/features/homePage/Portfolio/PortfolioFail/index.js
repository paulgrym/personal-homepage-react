import { Error, ErrorIcon, Paragrah, Wrapper } from "./styled";
import { ButtonLink } from "../../../../common/ButtonLink";

const PortfolioFail = () => {

  return (
    <Wrapper>
      <ErrorIcon />
      <Error>Ooops! Something went wrong...</Error>
      <Paragrah>Sorry, failed to load Github projects. <br /> You can check them directly on Github.</Paragrah>
      <ButtonLink href="https://github.com/paulgrym" title="Github" target="_blank" rel="noreferrer noopener">
        <span>Go to Github</span>
      </ButtonLink>
    </Wrapper>
  )
};

export default PortfolioFail;