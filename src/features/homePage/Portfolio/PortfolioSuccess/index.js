import Tile from "../Tile";
import { StyledPortfolio } from "./styled"

const PortfolioSuccess = () => {

  return (
    <StyledPortfolio>
      <Tile title={"Test 1"} description={"Test 1"} demoUrl="Test 1" repoUrl="Test 1" />
      <Tile title={"Test 2"} description={"Test 2"} demoUrl="Test 2" repoUrl="Test 2" />
      <Tile title={"Test 3"} description={"Test 3"} demoUrl="Test 3" repoUrl="Test 3" />
      <Tile title={"Test 4"} description={"Test 4"} demoUrl="Test 4" repoUrl="Test 4" />
    </StyledPortfolio>
  )
};

export default PortfolioSuccess;