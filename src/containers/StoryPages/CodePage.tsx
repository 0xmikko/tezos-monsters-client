/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StoryPage } from "../../core/storyPage";

import { Editor } from "../../components/IDE/editor";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";
import { RootState } from "../../store";
import "./StoryPage.css";

interface CodePageProps {
  data: StoryPage;
}
export const CodePage: React.FC<CodePageProps> = ({ data }) => {
  const dispatch = useDispatch();
  const [code, setCode] = useState(data.initialCode || '');

  const review = useSelector((state: RootState) => state.game.response);

  const editor = {
    title: "Smart Contract",
    language: "pascaligo",
    code,
  };

  const checkCode = () => {
    dispatch(
      actions.game.checkCodeAnswer(
        {
          code,
          syntax: "pascaligo",
          entrypoint: "main",
          parameters: "sds",
          storage: "sds",
        },
        "Hash"
      )
    );
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
