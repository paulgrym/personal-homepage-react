import { call, put, takeLatest, delay } from "redux-saga/effects";
import { githubAPIUrl } from "./githubAPIUrl";
import { getPortfolio } from "./getPortfolio";
import {
  fetchPortfolio,
  fetchPortfolioError,
  fetchPortfolioSuccess,
} from "./portfolioSlice";

const loadingDelay = 1000;

function* fetchPortfolioHandler() {
  try {
    yield delay(loadingDelay); //to demo the loading
    const portfolio = yield call(getPortfolio, githubAPIUrl("paulgrym"));
    yield put(fetchPortfolioSuccess(portfolio));
  } catch (error) {
    yield put(fetchPortfolioError());
  }
}

export function* watchFetchPortfolio() {
  yield takeLatest(fetchPortfolio.type, fetchPortfolioHandler);
}
