import { Icon, Section, Subheader, Title, Header } from "./styled";
import PortfolioSuccess from "./PortfolioSuccess";
import PortfolioLoading from "./PortfolioLoading";
import PortfolioFail from "./PortfolioFail";
import { useEffect } from "react";
import { fetchPortfolio, selectPortfolioList, selectPortfolioState } from "./portfolioSlice";
import { useDispatch, useSelector } from "react-redux";

const Portfolio = () => {
  const dispatch = useDispatch();
  const portfolio = useSelector(selectPortfolioList);
  const portfolioState = useSelector(selectPortfolioState);
  console.log(portfolioState)

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  const renderContent = (state) => {
    switch (state) {
      case "initial":
        return null;

      case "loading":
        return <PortfolioLoading />;

      case "error":
        return <PortfolioFail />;

      case "success":
        return <PortfolioSuccess portfolio={portfolio} />;

      default:
        throw new Error("incorrect status");
    }
  }

  return (
    <Section>
      <Header>
        <Icon />
        <Subheader>Portfolio</Subheader>
        <Title>My Recent Projects</Title>
      </Header>
      {renderContent(portfolioState)}
    </Section>
  );
};

export default Portfolio;