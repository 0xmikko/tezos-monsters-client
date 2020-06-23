/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import { Button, Media } from "react-bootstrap";
import "./AnswerReplyModal.css";
import { Answer } from "../../core/answer";
import { MagicButton } from "../../components/Button/MagicButton";

interface AnswerReplyModalProps {
  data: Answer | undefined;
  buttonText?: string;
  onPress: () => void;
  visible: boolean;
}

export const AnswerReplyModal: React.FC<AnswerReplyModalProps> = ({
  data,
  buttonText,
  onPress,
  visible,
}) => {
  if (data === undefined) {
    return <div />;
  }

  return (
    <div
      style={{
        top: window.innerHeight / 2 - 100,
        left: window.innerWidth / 2 - 300,
        visibility: visible ? "visible" : "hidden",
      }}
      className={"amWindow"}
    >
      <Media>
        <img
          src={"/images/wrong.png"}
          height={150}
          className="align-self-center mr-3"
        />
        <Media.Body style={{ marginLeft: "30px" }}>
          <h3 style={{ color: "#fab70dff" }}>
            {data.isCorrect ? "Great job!" : "You are wrong!"}
          </h3>
          <p style={{ color: "#fab70dff", fontSize: "20pt" }}>{data.message}</p>
        </Media.Body>
      </Media>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <MagicButton onClick={onPress} title={buttonText || "Ok"} />
      </div>
    </div>
  );
};
