import { Icon, Section, Subheader, Title, Header } from "./styled";
import PortfolioSuccess from "./PortfolioSuccess";
import PortfolioLoading from "./PortfolioLoading";
import PortfolioFail from "./PortfolioFail";
import { usePortfolioData } from "./usePortfolioData";

const Portfolio = () => {

  const portfolioData = usePortfolioData();
  const portfolio = portfolioData.data;
  const portfolioState = portfolioData.state;

  return (
    <Section>
      <Header>
        <Icon />
        <Subheader>Portfolio</Subheader>
        <Title>My Recent Projects</Title>
      </Header>
      {portfolioState === "loading"
        ? <PortfolioLoading />
        : portfolioState === "error"
          ? <PortfolioFail />
          : <PortfolioSuccess portfolio={portfolio} />
      }
    </Section>
  );
};

export default Portfolio;