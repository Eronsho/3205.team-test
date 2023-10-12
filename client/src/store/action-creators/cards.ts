import { CardActionTypes, Cards, CardsPayload } from "../../model/data-types";

export const fetchCardsRequest = (payload: Cards) => ({
  type: CardActionTypes.FETCH_CARDS,
  payload,
});
export const fetchCardsSuccess = (payload: Cards[]) => ({
  type: CardActionTypes.FETCH_CARDS_SUCCESSS,
  payload,
});
export const fetchCardsError = (payload: string) => ({
  type: CardActionTypes.FETCH_CARDS_ERROR,
  payload,
});
export const closeCardsError = () => ({
  type: CardActionTypes.ERORR_CLOSE,
});
