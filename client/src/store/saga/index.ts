import { all, fork } from "redux-saga/effects";
import { fetchCardsfWatcher } from "./cards";

export function* rootWatcher() {
  yield all([fork(fetchCardsfWatcher)]);
}
