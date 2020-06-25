/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useState } from "react";
import { MonsterPart } from "../../core/monsterPart";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { RangeInput } from "../../components/RangeInput";
import {ThroughFade} from "../../components/ThroughFadeEffect/ThroughFade";
import {StoryPage} from "../../core/storyPage";
import {Answer} from "../../core/answer";
import {QuizPage} from "../StoryPages/QuizPage";

export interface MonsterFactoryProps {
  data: StoryPage;
  onAnswerClicked: (a: Answer) => void;
}

export const MonsterFactory : React.FC<MonsterFactoryProps> = ({data,  onAnswerClicked}) => {
  const [parts, setParts] = useState<Record<string, MonsterPart>>({
    hat: { id: 1, x: 31, y: 3 },
    eyes: { id: 1, x: 34, y: 40 },
    nose: { id: 1, x: 32, y: 53 },
    mouth: { id: 1, x: 38, y: 64 },
  });

  const convert = (num: number, digits: number): string => {
    const max = digits === 1 ? 16 : 256;
    const hex = digits === 1 ? (num % 16).toString(16) :(Math.floor((num * (max - 1)) / 100) % max).toString(16);
    return (hex.length < digits ? "0" : "") + hex;
  };

  const convertPart = (part: MonsterPart): string => {
    return convert(part.id, 1) + convert(part.x, 2) + convert(part.y, 2);
  };

  const updatePart = (partName: string, v: string, value: number) => {
    console.log(partName, v, value);
    let part = parts[partName];
    if (part === undefined) return;
    switch (v) {
      case "id":
        part.id = value;
        break;
      case "x":
        part.x = value;
        break;
      case "y":
        part.y = value;
        break;
    }

    setParts({
      ...parts,
      [partName]: part,
    });
  };

  console.log(parts);

  const renderedParts = Object.entries(parts).map((p) => {
    const key = p[0];
    const value = p[1];
    return (
      <>
        <Form.Label>
          <h5>{key}</h5>
        </Form.Label>
        <RangeInput
          key={key}
          value={value.id}
          item={"id"}
          part={key}
          update={updatePart}
        />
        <RangeInput
          key={key}
          value={value.x}
          item={"x"}
          part={key}
          update={updatePart}
        />
        <RangeInput
          key={key}
          value={value.y}
          item={"y"}
          part={key}
          update={updatePart}
        />
      </>
    );
  });

  const body_id = 2;
  const code =
    convert(body_id, 1) +
    Object.values(parts)
      .map((p) => convertPart(p))
      .join("");

  return (
      <ThroughFade>
        <Container
            fluid
            style={{
              backgroundColor: "#000",
              overflow: "hidden",
              height: "100vh",
            }}
        >
          <Row>
            <Col xl={6} lg={6} md={6} sm={6} xs={6} style={{ padding: 0 }}>
              <div className={"quiz_page"}>
              <h4>Monster: {code}</h4>
              <img
                  src={`https://monsters-factory.herokuapp.com/${code}/`}
                  height={window.innerHeight - 150}
                  alt="logo"
              />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={6} style={{ padding: 0 }}>
              <QuizPage data={data} onAnswerClicked={onAnswerClicked} extraComponent={renderedParts} />
              {/*<Form>{renderedParts}</Form>*/}
            </Col>
          </Row>
        </Container>
      </ThroughFade>


  );
};
