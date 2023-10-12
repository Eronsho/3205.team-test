import React from "react";

import { Main } from "./pages/main";
import { Provider } from "react-redux";
import { store } from "./store";
import Modal from "./components/modal-error/modal-error";

function App() {
  return (
    <div className="main">
      <Provider store={store}>
        <Main />
        <Modal />
      </Provider>
    </div>
  );
}

export default App;
