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

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

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