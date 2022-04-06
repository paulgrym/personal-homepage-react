import { all } from "redux-saga/effects";
import { watchSaveThemeInLocalStorage } from "./common/ThemeSwitcher/themeSaga";
import { watchFetchPortfolio } from "./features/homePage/Portfolio/portfolioSaga";


export default function* rootSaga() {
  yield all([
    watchFetchPortfolio(),
    watchSaveThemeInLocalStorage(),
  ]);
};