import { call, put, takeLatest, delay } from "redux-saga/effects";
import APIUrl from "./APIUrl";
import { getPortfolio } from "./getPortfolio";
import { fetchPortfolio, fetchPortfolioError, fetchPortfolioSuccess } from "./portfolioSlice";

function* fetchPortfolioHandler() {
  try {
    yield delay(300);
    const portfolio = yield call(getPortfolio, APIUrl);
    yield put(fetchPortfolioSuccess(portfolio));
  } catch (error) {
    yield put(fetchPortfolioError(error));
  }
};

export function* watchFetchPortfolio() {
  yield takeLatest(fetchPortfolio.type, fetchPortfolioHandler);
};