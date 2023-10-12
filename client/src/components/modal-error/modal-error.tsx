import ReactDOM from "react-dom";

import { useTypeSelector } from "../../hooks/useTypeSelector";

import { CardsState } from "../../model/data-types";
import {
  useHandlers,
  useModalErrorHandling,
} from "./hooks/use-modal-error-hanling";

const portal = document.getElementById("portal");

function Modal(): JSX.Element {
  const { error } = useTypeSelector<CardsState>((state) => state.cards);

  const { modalRef } = useModalErrorHandling();
  const { onClickCloseHandler } = useHandlers();

  if (portal !== null) {
    return ReactDOM.createPortal(
      <dialog className="modal" ref={modalRef}>
        <div className="modal__layout">
          {error}
          <div className="close" onClick={() => onClickCloseHandler()}></div>
        </div>
      </dialog>,
      portal
    );
  }
  return <></>;
}

export default Modal;
