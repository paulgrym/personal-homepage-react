import { all } from "redux-saga/effects";
import { watchFetchPortfolio } from "./features/homePage/Portfolio/portfolioSaga";


export default function* rootSaga() {
  yield all([
    watchFetchPortfolio(),
  ]);
};