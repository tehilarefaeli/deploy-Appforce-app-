import { all, fork } from "redux-saga/effects";

import todoSaga from "./user/sagas";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}
