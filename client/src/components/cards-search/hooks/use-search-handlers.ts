import { FormEvent } from "react";
import { useDispatch } from "react-redux";

export const useSeacrhHandlers = (email: string, number: number) => {
  const dispatch = useDispatch();
  const onSubmitHandler = (event: FormEvent): void => {
    event.preventDefault();
    const cards = {
      email,
      number,
    };
  };
  return { onSubmitHandler };
};
