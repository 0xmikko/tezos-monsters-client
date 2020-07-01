/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import { Container } from "react-bootstrap";
import { MagicButton } from "../../components/Button/MagicButton";
import { useHistory } from "react-router";

export const WelcomeScreen: React.FC = () => {
  const history = useHistory();
  return (
    <Container className="welcome-screen" fluid>
      <div className="title">
        {" "}
        <span
          style={{
            fontFamily: "Godzilla",
            fontSize: "100pt",
            color: "#ffb600",
            textShadow:
              "4px 4px 0 white, 4px -4px 0 white, -4px 4px 0 white, -4px -4px 0 white",
          }}
        >
          Monsters Factory!
        </span>
        <br />
          <span
            style={{
              fontFamily: "MortyOld",
              fontSize: "27pt",
              color: "#fff",
              fontWeight: 1000,
              textShadow: "1px black",
              lineHeight: 1.2,
            }}
          >
            Learn Ligo language and Tezos by playing a horror game!
          </span>
          <MagicButton
            title={"GET STARTED!"}
            onClick={() => history.push("/story")}
            style={{ width: "40%",  fontFamily: "MortyOld", fontSize: '22pt', borderRadius: '15px'}}
          />
      </div>
    </Container>
  );
};
