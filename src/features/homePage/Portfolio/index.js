import { Icon, Section, Subheader, Title, Header } from "./styled";
import PortfolioSuccess from "./PortfolioSuccess";
import PortfolioLoading from "./PortfolioLoading";
import PortfolioFail from "./PortfolioFail";

const Portfolio = () => {

  return (
    <Section>
      <Header>
        <Icon />
        <Subheader>Portfolio</Subheader>
        <Title>My Recent Projects</Title>
      </Header>
      <PortfolioSuccess />
    </Section>
  );
};

export default Portfolio;