import React, { useEffect } from "react";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";

import { CardsState } from "../../../model/data-types";
import { closeCardsError } from "../../../store/action-creators/cards";

interface IReturnUseDialogHandling {
  modalRef: React.RefObject<HTMLDialogElement>;
}

export const useModalErrorHandling = (): IReturnUseDialogHandling => {
  const { error } = useTypeSelector<CardsState>((state) => state.cards);
  const dispatch = useDispatch();
  const modalRef = React.createRef<HTMLDialogElement>();

  const onWindowEscKeydownHandler = (event: globalThis.KeyboardEvent): void => {
    if (event.key === "Esc" || event.key === "Escape") {
      dispatch(closeCardsError());
    }
  };
  const onClickCloseHandler = (): void => {};

  useEffect(() => {
    window.addEventListener("keydown", onWindowEscKeydownHandler);
   
    if (error) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }

    return () => {
      window.removeEventListener("keydown", onWindowEscKeydownHandler);
    };
  }, [error]);

  return { modalRef };
};
export const useHandlers = (): {
  onClickCloseHandler: typeof onClickCloseHandler;
} => {
  const dispatch = useDispatch();

  const onClickCloseHandler = (): void => {
    dispatch(closeCardsError());
  };
  return { onClickCloseHandler };
};
