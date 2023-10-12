import { useForm } from "react-hook-form";
import { CardsPayload } from "../../model/data-types";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { fetchCardsRequest } from "../../store/action-creators/cards";

export const CardsSearch: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CardsPayload>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      number: undefined,
    },
  });

  const onSubmits = (data: CardsPayload) => {
    if (data.number?.length > 0) {
      const newNumber = Number(data.number.replace(/[-\s]/g, ""));
      dispatch(fetchCardsRequest({ email: data.email, number: newNumber }));
    } else {
      dispatch(fetchCardsRequest({ email: data.email }));
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmits)}>
        <div className="main__content">
          <label htmlFor={`email`} className="input-text ">
            <p>Введите email </p>

            <input
              className={errors?.email ? "error input" : "input"}
              defaultValue={""}
              id="email"
              {...register(`email` as const, {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                  message: "Введите корректный e-mail",
                },
              })}
            />
            {errors.email && errors.email.type === "pattern" && (
              <div className="error">{errors.email.message}</div>
            )}
          </label>

          <label htmlFor={`number`} className="input-text">
            <p>Введите number </p>

            <InputMask
              mask="99-99-99"
              // alwaysShowMask={true}
              className={errors?.number ? "error input" : "input"}
              type={"phone"}
              typeof="number"
              placeholder="12-23-43"
              id="number"
              defaultValue={undefined}
              {...register(`number` as const, {
                pattern: {
                  value: /^\d{2}-\d{2}-\d{2}/,
                  message: "введите корректные данные",
                },
                minLength: 6,
                // minLength: {
                //   value: 7,
                //   message: "min length is 5",
                // },
              })}
            />
            {errors.number && errors.number.type === "pattern" && (
              <div className="error">{errors.number.message}</div>
            )}
          </label>
        </div>
        <button type="submit" className="btn ">
          Отправить
        </button>
      </form>
    </div>
  );
};
