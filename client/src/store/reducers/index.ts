import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReduc";

export const rootReducer = combineReducers({
  cards: cardsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
