import axios from "axios";

export const getPortfolio = async (APIUrl) => {
  const response = await axios.get(APIUrl);
  return response.data;
}