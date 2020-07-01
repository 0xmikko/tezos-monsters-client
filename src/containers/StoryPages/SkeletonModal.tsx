/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import { Media } from "react-bootstrap";
import { MagicButton } from "../../components/Button/MagicButton";
import styled from "styled-components";

export interface SkeletonMessage {
  header: string;
  text: string;
  buttonText?: string;
}

interface SkeletonProps {
  message: SkeletonMessage | undefined;
  onPress: () => void;
  visible: boolean;
  showButton: boolean;
}

export const SkeletonModal: React.FC<SkeletonProps> = ({
  message,
  onPress,
  visible,
  showButton,
}) => {
  if (message === undefined) return <div />;

  return (
    <Container
      style={{
        top: window.innerHeight / 2 - 100,
        left: window.innerWidth / 2 - 300,
        visibility: visible ? "visible" : "hidden",
        justifyContent: "center",
      }}
      className={"amWindow"}
    >
      <Media>
        <img
          src={"/images/wrong.png"}
          height={150}
          className="align-self-center mr-3"
          alt={"Skeleton"}
        />
        <Media.Body style={{minWidth: '370px', textAlign: 'center'}}

        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h3 style={{ color: "#fab70dff" }}>{message.header}</h3>

            <p style={{ color: "#fab70dff", fontSize: "20pt" }}>
                <div dangerouslySetInnerHTML={{__html: message.text}} />
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <MagicButton onClick={onPress} title={


                showButton ? message.buttonText || "Ok" : 'Loading...'}
                disabled={!showButton}
            />
          </div>
        </Media.Body>
      </Media>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  z-index: 900;
  width: 600px;
  min-height: 250px;
  background-color: #310e0e;
  border: 10px solid white;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: row;
`;

