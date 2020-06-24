/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StoryPage } from "../../core/storyPage";

import { Editor } from "../../components/IDE/editor";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styled from "styled-components";

interface CodePageProps {
  data: StoryPage;
  onCheckCode: (code: string) => void;
}
export const CodePage: React.FC<CodePageProps> = ({ data, onCheckCode }) => {
  const [code, setCode] = useState(data.initialCode || "");

  const review = useSelector((state: RootState) => state.game.response);

  const editor = {
    title: "Smart Contract",
    language: "pascaligo",
    code,
  };

  const checkCode = () => {
    onCheckCode(code);
  };

  return (
    <div className="code_page">
      <div
        style={{
          width: "100%",
          height: "auto",
          padding: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#090971'
        }}
      >
        <span style={{ color: "white" }}><strong>Ligo editor</strong> </span>
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
      </div>
      <Editor
        value={editor.code}
        language={editor.language}
        theme={{ mode: "light" }}
        onChange={setCode}
        style={{ height: "75%" }}
      />
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
