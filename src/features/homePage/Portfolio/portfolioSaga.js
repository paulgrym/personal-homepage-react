import { call, put, takeLatest, delay } from "redux-saga/effects";
import { githubAPIUrl } from "./githubAPIUrl";
import { getPortfolio } from "./getPortfolio";
import {
  fetchPortfolio,
  fetchPortfolioError,
  fetchPortfolioSuccess,
} from "./portfolioSlice";

function* fetchPortfolioHandler() {
  try {
    yield delay(1000); //to demo the loading
    const portfolio = yield call(getPortfolio, githubAPIUrl("paulgrym"));
    yield put(fetchPortfolioSuccess(portfolio));
  } catch (error) {
    yield put(fetchPortfolioError());
  }
}

export function* watchFetchPortfolio() {
  yield takeLatest(fetchPortfolio.type, fetchPortfolioHandler);
}
