import { v4 as uuidv4 } from "uuid";
import cards from "../utils/cards-list.json";
import path from "path";
import { error } from "console";

class CardsService {
  async getCards(email: string, number: number | undefined) {
    const searchCards = cards.filter((e) =>
      number !== undefined
        ? e.number === number && e.email === email
        : e.email === email
    );
    if (searchCards.length <= 0) {
      throw new Error("данные пустые");
    }
    return searchCards;
  }
}
const cardsService = new CardsService();
export { cardsService };
