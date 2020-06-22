/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import { Button, Media } from "react-bootstrap";
import "./AnswerReplyModal.css";

interface AnswerReplyModalProps {
  header: string;
  text: string;
  buttonText?: string;
  onPress: () => void;
  visible: boolean;
}

export const AnswerReplyModal: React.FC<AnswerReplyModalProps> = ({
  header,
  text,
  buttonText,
  onPress,
  visible,
}) => {
  return (
    <div
      style={{
        top: window.innerHeight / 2 - 100,
        left: window.innerWidth / 2 - 250,
        visibility: visible ? "visible" : "hidden",
      }}
      className={"amWindow"}
    >
      <Media>
        <Media.Body>
          <img src={"/images/wrong.png"} height={150} />
        </Media.Body>
        <Media.Body>
          <h3 style={{ color: "#fab70dff" }}>{header}</h3>
          {text}
          <Button onClick={onPress}>{buttonText || "Ok"}</Button>
        </Media.Body>
      </Media>
    </div>
  );
};
