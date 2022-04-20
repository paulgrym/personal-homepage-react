import { Icon, Section, Subheader, Title, Header } from "./styled";
import { useEffect } from "react";
import {
  fetchPortfolio,
  selectPortfolioList,
  selectPortfolioState,
} from "./portfolioSlice";
import { useDispatch, useSelector } from "react-redux";
import Content from "./Content";

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
      <Content portfolio={portfolio} state={portfolioState} />
    </Section>
  );
};

export default Portfolio;
