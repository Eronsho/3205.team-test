import { ApiError } from "../exceptions/api-error";
import { cardsService } from "../service/cards-service";
import { NextFunction, Request, Response } from "express";
import express from "express";

export let router = express.Router();

router.post(
  "/api/cards",
  async (req: Request, res: Response, next: NextFunction) => {
    setTimeout(async function () {
      try {
        const { email, number } = req.body;

        const cards = await cardsService.getCards(email, number);

        return res.status(200).send(cards);
      } catch (e) {
        let result = (e as Error).message;

        next(ApiError.BadRequest(result));
      }
    }, 5000);
  }
);
