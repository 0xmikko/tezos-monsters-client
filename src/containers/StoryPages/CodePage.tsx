/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StoryPage } from "../../core/storyPage";

import { Editor } from "../../components/IDE/editor";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import styled from "styled-components";
import actions from "../../store/actions";

interface CodePageProps {
  data: StoryPage;
  onCheckCode: (code: string) => void;
  done: boolean;
}
export const CodePage: React.FC<CodePageProps> = ({
  data,
  onCheckCode,
  done,
}) => {
  const dispatch = useDispatch();
  const [code, setCode] = useState(data.initialCode || "");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    setCode(data.initialCode || "");
    setLoading(false);
  }, [data.initialCode]);

  const review = useSelector((state: RootState) => state.game.response);

  const checkCode = () => {
    onCheckCode(code);
  };

  const IdeAppBar = done ? (
    <div>
      <StyledButton
        size={"sm"}
        onClick={() => {
            setLoading(true);
            dispatch(actions.game.resetCodeReview())
            dispatch(actions.game.getCurrentPage())

        }}
        style={{ marginRight: "10px" }}
      >
        Next page
      </StyledButton>{" "}
    </div>
  ) : (
    <div>
      <StyledButton
        size={"sm"}
        onClick={checkCode}
        style={{ marginRight: "10px" }}
      >
        Show me right answer [ -100,000 ]
      </StyledButton>{" "}
      <StyledButton size={"sm"} onClick={checkCode}>
        Check answer
      </StyledButton>
    </div>
  );

  const editor = loading ? "Loading" :  <Editor
      value={code}
      language={"pascaligo"}
      theme={{ mode: "light" }}
      onChange={setCode}
      style={{ height: "75%" }}
  />

  return (
    <div className="code_page">
      <div
        style={{
          width: "100%",
          height: "auto",
          padding: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#090971",
        }}
      >
        <span style={{ color: "white" }}>
          <strong>{data.contractName || "Ligo editor"}</strong>{" "}
        </span>
        {IdeAppBar}
      </div>
        {editor}
      <div
        style={{
          backgroundColor: "white",
          height: "25%",
          overflowY: "scroll",
          padding: 20,
        }}
      >
        Hint
        <br />
        <span style={{ color: review?.error ? "red" : "black" }}>
          {(review?.result || "").split("\n").map((i) => (
            <>
              {i}
              <br />
            </>
          ))}
        </span>
      </div>
    </div>
  );
};

const StyledButton = styled(Button)`
  background-color: #6f1b1b;
  border: 1px solid black;

  &:hover {
    background-color: #6f1b1b;
    color: white;
    border: 1px solid black;
    box-shadow: 1px 2px 2px 2px black;
  }
  &:active {
    background-color: #6f1b1b;
    color: white;
    border: 1px solid black;
    box-shadow: 1px 2px 2px 2px black;
  }
  &:disabled {
    background-color: #454545;
    color: white;
    border: 1px solid black;
  }
`;
