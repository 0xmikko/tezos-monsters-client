/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { MagicButton } from "../../components/Button/MagicButton";
import { ThroughFade } from "../../components/ThroughFadeEffect/ThroughFade";
import "./BookView.css";
import { StoryPage } from "../../core/storyPage";
import { Answer } from "../../core/answer";
import { AnswerReplyModal } from "./AnswerReplyModal";
import { useDispatch } from "react-redux";
import actions from "../../store/actions";

interface BookViewProps {
  data: StoryPage;
}
export const BookView: React.FC<BookViewProps> = ({ data }) => {
  const dispatch = useDispatch();
  const [currentAnswer, setCurrentAnswer] = useState<Answer | undefined>(
    undefined
  );
  const [modalVisible, setModalVisible] = useState(false);

  const onAnswerClicked = (answer: Answer) => {
    setCurrentAnswer(answer);
    setModalVisible(true);
    if (answer!== undefined && answer.isCorrect) {
      dispatch(actions.game.checkQuizAnswer(answer.id));

    }

  };

  const onModalPressed = () => {
    setModalVisible(false);
  };

  const answersRendered = (data.answers || []).map((e) => (
    <>
      <MagicButton title={e.name} onClick={() => onAnswerClicked(e)} />
      <br />
    </>
  ));

  return (
    <ThroughFade>
      <AnswerReplyModal
        data={currentAnswer}
        onPress={onModalPressed}
        visible={modalVisible}
      />
      <Container fluid>
        <Row>
          <Col
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className={"page1"}
            style={{ padding: 0, backgroundImage: `url(${data.image})` }}
          >
            {/* { leftImage } */}
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={6} className={"page2"}>
            <h2>{data.header}</h2>
            <ReactMarkdown>{data.text}</ReactMarkdown>

            {answersRendered}
          </Col>
        </Row>
      </Container>
    </ThroughFade>
  );
};
