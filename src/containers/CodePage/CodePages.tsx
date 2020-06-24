/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Language } from "../../components/IDE/types";
import { CompactLigoIde } from "../../components/IDE/compact-ligo-ide";
import { MagicButton } from "../../components/Button/MagicButton";
import { ThroughFade } from "../../components/ThroughFadeEffect/ThroughFade";
// import "./BookView.css";
import { StoryPage } from "../../core/storyPage";
import "./CodePages.css";
import { Editor } from "../../components/IDE/editor";
import ReactMarkdown from "react-markdown";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../store/actions";
import {RootState} from "../../store";
// import {Editor} from "../../components/IDE/editor";

interface CodePageProps {
  data: StoryPage;
}
export const CodePage: React.FC<CodePageProps> = ({ data }) => {
  const dispatch = useDispatch();
  const [code, setCode] = useState(`
// variant defining pseudo multi-entrypoint actions

type action is
| Increment of int
| Decrement of int

function add (const a : int ; const b : int) : int is
  block { skip } with a + b

function subtract (const a : int ; const b : int) : int is
  block { skip } with a - b

// real entrypoint that re-routes the flow based
// on the action provided
function main (const p : action ; const s : int) :
  (list(operation) * int) is
  block { skip } with ((nil : list(operation)),
  case p of
  | Increment(n) -> add(s, n)
  | Decrement(n) -> subtract(s, n)
  end)`);

  const review = useSelector((state: RootState) => state.game.response?.result) || '';

  const editor = {
    title: "Smart Contract",
    language: Language.PascaLigo,
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
    <ThroughFade>
      <Container fluid>
        <Row>
          <Col xl={6} lg={6} md={6} sm={6} xs={6} className={"page2"}>
            <h2>{data.header}</h2>
            <ReactMarkdown>{data.text}</ReactMarkdown>
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={6} className="compactLigoIde">
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
              style={{height: '75%'}}
            />
            <div style={{backgroundColor: 'white', height: '25%'}}>
              Hint<br/>
              {review.split('\n').map(i => {
                return <>{i}<br/></>})}

            </div>
          </Col>
        </Row>
      </Container>
    </ThroughFade>
  );
};
