import {
  CardActionTypes,
  CardsState,
  CardstAction,
} from "../../model/data-types";

const cardsState: CardsState = {
  cards: null,
  loading: false,
  error: null,
};
export const cardsReducer = (
  state = cardsState,
  action: CardstAction
): CardsState => {
  switch (action.type) {
    case CardActionTypes.FETCH_CARDS:
      return {
        ...state,
        cards: null,
        error: null,
        loading: true,
      };
    case CardActionTypes.FETCH_CARDS_SUCCESSS:
      return {
        cards: action.payload,
        error: null,
        loading: false,
      };
    case CardActionTypes.FETCH_CARDS_ERROR:
      return {
        cards: null,
        error: action.payload,
        loading: false,
      };
    case CardActionTypes.ERORR_CLOSE:
      return {
        cards: state.cards,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};
