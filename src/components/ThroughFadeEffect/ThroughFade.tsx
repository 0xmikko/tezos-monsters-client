/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";
import React, { useState } from "react";
import "./ThroughFade.css";
import { Button } from "react-bootstrap";

export const ThroughFade: React.FC = ({ children }) => {
  const [items, setItems] = useState(["sss"]);
  const [ing, setIng] = useState(true);

  const onPress = () => {
    setItems([...items, "QQQQ"]);
    setIng(!ing);
    console.log(items);
  };

  const itemsRendered = items.map((e, index) => <h1 key={index}>{e}</h1>);

  return (
    <CSSTransition
      in={true}
      timeout={2000}
      appear={"example"}
      classNames="example"
      unmountOnExit
    >
      <div>{children}</div>
    </CSSTransition>
  );
};
