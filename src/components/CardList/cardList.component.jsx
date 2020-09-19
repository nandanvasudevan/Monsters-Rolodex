import React from "react";

import "./cardList.styles.css";
import { Card } from "../Card/card.component";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);