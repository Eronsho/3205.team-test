import { Cards } from "../../model/data-types";

const Card: React.FC<Cards> = ({ email, number }) => {
  return (
    <div className="card">
      <div className="card__title">email: {email}</div>
      <div className="card__title">number: {number}</div>
    </div>
  );
};
export { Card };
