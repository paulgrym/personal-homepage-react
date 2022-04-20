import { RepoLink } from "./RepoLink";
import Tile from "./Tile";
import { Paragraph, StyledPortfolio } from "./styled";

const PortfolioSuccess = ({ portfolio }) => {
  const filteredPortfolio = portfolio.filter(
    ({ name }) => name !== "paulgrym" && name !== "personal-homepage-react"
  );

  const sortedByCreateDayPortfolio = filteredPortfolio.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const thisProjectRepo = portfolio.find(
    ({ name }) => name === "personal-homepage-react"
  );

  return (
    <>
      <Paragraph>
        <RepoLink
          href={thisProjectRepo.html_url}
          target="_blank"
          rel="noreferrer noopener"
        >
          This project's Github repository
        </RepoLink>
      </Paragraph>
      <StyledPortfolio>
        {sortedByCreateDayPortfolio.map((repo) => (
          <Tile
            key={repo.id}
            title={repo.name}
            description={repo.description}
            demoUrl={repo.homepage}
            repoUrl={repo.html_url}
          />
        ))}
      </StyledPortfolio>
    </>
  );
};

export default PortfolioSuccess;
