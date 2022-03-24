import Tile from "../Tile";
import { StyledPortfolio } from "./styled"

const PortfolioSuccess = ({ portfolio }) => {
  const filteredPortfolio = portfolio.filter(({ name }) => (
    name !== "paulgrym"
    && name !== "personal-homepage-react"
  ));

  const sortedByCreateDayPortfolio = filteredPortfolio.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <StyledPortfolio>
      {sortedByCreateDayPortfolio.map(repo => (
        <Tile
          key={repo.id}
          title={repo.name}
          description={repo.description}
          demoUrl={repo.homepage}
          repoUrl={repo.html_url}
        />
      ))}
    </StyledPortfolio>
  )
};

export default PortfolioSuccess;