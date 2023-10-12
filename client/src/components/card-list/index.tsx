import { Spinner } from "react-bootstrap";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { CardsState } from "../../model/data-types";
import { Card } from "../card";

const CardList: React.FC = () => {
  const { loading, cards, error } = useTypeSelector<CardsState>(
    (state) => state.cards
  );

  return (
    <div className="cards-container">
      {loading === true ? (
        <Spinner animation={"grow"} />
      ) : cards !== null && loading === false ? (
        cards.map((e) => <Card email={e.email} number={e.number} />)
      ) : (
        ""
      )}
    </div>
  );
};
export { CardList };
