export interface Cards {
  email: string;
  number?: number;
}
export interface CardsPayload {
  email: string;
  number: string;
}
export interface CardsState {
  cards: Cards[] | null;
  loading: boolean;
  error: null | string;
}
export enum CardActionTypes {
  FETCH_CARDS = "FETCH_CARDS",
  FETCH_CARDS_SUCCESSS = "FETCH_CARDS_SUCCESSS",
  FETCH_CARDS_ERROR = "FETCH_CARDS_ERROR",
  ERORR_CLOSE = "ERORR_CLOSE",
}
interface fetchCardsAction {
  type: CardActionTypes.FETCH_CARDS;
  payload: CardsPayload;
}
interface fetchCardsSuccessAction {
  type: CardActionTypes.FETCH_CARDS_SUCCESSS;
  payload: Cards[];
}
interface fetchCardsErorrAction {
  type: CardActionTypes.FETCH_CARDS_ERROR;
  payload: string;
}
interface closeErorrAction {
  type: CardActionTypes.ERORR_CLOSE;
}
export type CardstAction =
  | fetchCardsAction
  | fetchCardsSuccessAction
  | fetchCardsErorrAction
  | closeErorrAction;
