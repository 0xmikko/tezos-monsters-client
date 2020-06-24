/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Media } from "react-bootstrap";
import { QuizPage } from "../../containers/StoryPages/QuizPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import actions from "../../store/actions";
import { CodePage } from "../../containers/StoryPages/CodePage";
import { Answer } from "../../core/answer";
import { ThroughFade } from "../../components/ThroughFadeEffect/ThroughFade";
import { AnswerReplyModal } from "../../containers/StoryPages/AnswerReplyModal";
import { PicturePage } from "../../containers/StoryPages/PicturePage";
import AppBar from "../../components/AppBar/AppBar";
import {TextPage} from "../../containers/StoryPages/TextPage";

export const StoryScreen: React.FC = () => {
  const dispatch = useDispatch();

  const [currentAnswer, setCurrentAnswer] = useState<Answer | undefined>(
    undefined
  );
  const [modalVisible, setModalVisible] = useState(false);

  const profile = useSelector((state: RootState) => state.profile);
  const { currentPage } = profile;

  useEffect(() => {
    dispatch(actions.game.getCurrentPage());
  }, [currentPage]);

  const data = useSelector((state: RootState) => state.game.storyPage);

  if (data === undefined) return <>"Loading"</>;

  const onAnswerClicked = (answer: Answer) => {
    setCurrentAnswer(answer);
    setModalVisible(true);
    if (answer !== undefined && answer.isCorrect) {
      dispatch(actions.game.checkQuizAnswer(answer.id));
    }
  };

  const onModalPressed = () => {
    setModalVisible(false);
  };

  const leftPage = data.isCodePage ? (
    <TextPage data={data}  />
  ) : (
    <PicturePage data={data} />
  );

  const rightPage = data.isCodePage ? (
    <CodePage data={data} />
  ) : (
    <QuizPage data={data} onAnswerClicked={onAnswerClicked} />
  );

  return (
    <ThroughFade>
      <AnswerReplyModal
        data={currentAnswer}
        onPress={onModalPressed}
        visible={modalVisible}
      />
      <Container fluid style={{ backgroundColor: "#000", overflow: "hidden", height: '100vh' }}>
        <AppBar />
        <Row>
          <Col xl={6} lg={6} md={6} sm={6} xs={6} style={{padding: 0,   }}>
            {leftPage}
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={6} style={{padding: 0}}>
            {rightPage}
          </Col>
        </Row>
      </Container>
    </ThroughFade>
  );
};
