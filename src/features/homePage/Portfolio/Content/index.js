import PortfolioSuccess from "./PortfolioSuccess";
import PortfolioLoading from "./PortfolioLoading";
import PortfolioFail from "./PortfolioFail";

const Content = ({ state, portfolio }) => {
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
};

export default Content;
