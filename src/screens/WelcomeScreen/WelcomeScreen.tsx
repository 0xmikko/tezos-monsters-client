/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import { Container } from "react-bootstrap";
import "./WelcomeScreen.css";
import text_mf from "./text_mf.svg";

export const WelcomeScreen: React.FC = () => {
  return (
    <Container className="welcome-screen" fluid>
      <div className="title">
        {" "}
        <span
          style={{
            fontFamily: "Godzilla",
            fontSize: "140pt",
            color: "#ffb600",
              textShadow: '4px 4px 0 white, 4px -4px 0 white, -4px 4px 0 white, -4px -4px 0 white',
          }}
        >
          Monsters Factory!
        </span><br/>
        <a href="/story">
        <span
          style={{
            fontFamily: "Blackhead",
            fontSize: "50pt",
            color: "#fff",
            fontWeight: 1000,
              textShadow: '1px black',
          }}
        >
          Play horror game & learn Tezos!

        </span></a>
      </div>
    </Container>
  );
};
