import { Error, ErrorIcon, Paragrah, Wrapper } from "./styled";
import { ButtonLink } from "../../../../../common/ButtonLink";
import { username } from "../../githubData";

const PortfolioFail = () => {
  return (
    <Wrapper>
      <ErrorIcon />
      <Error>Ooops! Something went wrong… </Error>
      <Paragrah>
        Sorry, failed to load Github projects. <br />
        You can check them directly on Github.
      </Paragrah>
      <ButtonLink
        href={`https://github.com/${username}`}
        title="Github"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span>Go to Github</span>
      </ButtonLink>
    </Wrapper>
  );
};

export default PortfolioFail;
