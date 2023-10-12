import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import { rootWatcher } from "./saga";

const sagaMiddLeware = createSagaMiddleware();
const saveToLocalStorage = (state: any) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {}
};
const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("state");
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    return undefined;
  }
};
const persistedStore = loadFromLocalStorage();
//   const store = configureStore(rootReducer, persistedStore);
export const store = createStore(
  rootReducer,
  persistedStore,
  applyMiddleware(sagaMiddLeware)
);

sagaMiddLeware.run(rootWatcher);
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
