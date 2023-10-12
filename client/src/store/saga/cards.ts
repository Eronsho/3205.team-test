import { call, put, all, takeLatest } from "redux-saga/effects";
import { $host } from "../../http";
import { fetchCardsError, fetchCardsSuccess } from "../action-creators/cards";
import { CardActionTypes, CardsPayload } from "../../model/data-types";
import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const fetchTokens = (params: CardsPayload) => {
  return $host.post<any>("api/cards", params, { cancelToken: source.token });
};

function* fetchCardsWorker(action: any) {
  try {
    const { data } = yield call(fetchTokens, action.payload);

    yield put(fetchCardsSuccess(data));
  } catch (e) {
    let result = (e as Error).message;

    yield put(fetchCardsError(result));
  }
}

export function* fetchCardsfWatcher() {
  yield all([takeLatest(CardActionTypes.FETCH_CARDS, fetchCardsWorker)]);
}
