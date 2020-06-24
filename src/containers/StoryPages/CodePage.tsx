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
      <div style={{ width: "100%", height: "auto" }}>
        <Container>
          <Row>
            <Col xl={8} lg={8} md={8} style={{ color: "white" }}>
              Ligo basics.ligo
            </Col>
            <Col xl={4} lg={4} md={4}>
              {" "}
              <Button size={"sm"} onClick={checkCode}>
                Check answer
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Editor
        value={editor.code}
        language={editor.language}
        theme={{ mode: "light" }}
        onChange={setCode}
        style={{ height: "75%" }}
      />
      <div style={{ backgroundColor: "white", height: "25%" }}>
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
