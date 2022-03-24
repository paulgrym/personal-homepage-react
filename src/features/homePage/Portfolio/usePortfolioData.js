import axios from "axios";
import { useState, useEffect } from "react";

export const usePortfolioData = () => {
  const [portfolioData, setPortfolioData] = useState({ state: "loading" });

  const APIUrl = "https://api.github.com/users/paulgrym/repos";

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const response = await axios.get(APIUrl);
        const data = response.data;

        if (!data) {
          throw new Error(response.statusText);
        }

        setPortfolioData({
          data,
          state: "success"
        });

      } catch (error) {
        console.error("Sth bad happened", error);
        setPortfolioData({ state: "error" });
      }
    }
    setTimeout(getPortfolio, 2_000);
  }, []);

  return portfolioData;
}