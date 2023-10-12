/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/index.scss";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { CardsSearch } from "../components/cards-search/cards-search";
import { CardList } from "../components/card-list";

export const Main: React.FC = () => {
  return (
    <div className="main__container">
      <div className="main__title">
        <p>Поиск</p>
      </div>
      <div className="main__content">
        <CardsSearch />
      </div>
      <CardList />
    </div>
  );
};
