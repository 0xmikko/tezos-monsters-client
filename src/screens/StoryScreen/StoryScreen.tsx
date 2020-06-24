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
import {
  SkeletonMessage,
  SkeletonModal,
} from "../../containers/StoryPages/SkeletonModal";
import { PicturePage } from "../../containers/StoryPages/PicturePage";
import AppBar from "../../components/AppBar/AppBar";
import { TextPage } from "../../containers/StoryPages/TextPage";

export const StoryScreen: React.FC = () => {
  const dispatch = useDispatch();

  const [skeletonMessage, setSkeletonMessage] = useState<
    SkeletonMessage | undefined
  >(undefined);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(actions.game.getCurrentPage());
  }, []);

  const data = useSelector((state: RootState) => state.game.storyPage);

  const onAnswerClicked = (answer: Answer) => {
    setSkeletonMessage({
      header: answer.isCorrect ? "Great job!" : "You are wrong!",
      text: answer.message,
    });
    setModalVisible(true);
    if (answer !== undefined && answer.isCorrect) {
      dispatch(actions.game.checkQuizAnswer(answer.id));
    }
  };

  const submitCode = (code: string) => {
    setSkeletonMessage({
      header: "Checking your code",
      text: "Relax, we will check you!",
    });
    dispatch(actions.game.checkCodeAnswer(code, "Hash"));
    setModalVisible(true);
  };

  const onModalPressed = () => {
    setModalVisible(false);
  };

  const leftPage =
    data === undefined ? (
      "Loading"
    ) : data.isCodePage ? (
      <TextPage data={data} />
    ) : (
      <PicturePage data={data} />
    );

  const rightPage =
    data === undefined ? (
      "Loading"
    ) : data.isCodePage ? (
      <CodePage data={data} onCheckCode={submitCode}/>
    ) : (
      <QuizPage data={data} onAnswerClicked={onAnswerClicked} />
    );

  return (
    <ThroughFade>
      <SkeletonModal
        message={skeletonMessage}
        onPress={onModalPressed}
        visible={modalVisible}
      />
      <Container
        fluid
        style={{ backgroundColor: "#000", overflow: "hidden", height: "100vh" }}
      >
        <AppBar />
        <Row>
          <Col xl={6} lg={6} md={6} sm={6} xs={6} style={{ padding: 0 }}>
            {leftPage}
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={6} style={{ padding: 0 }}>
            {rightPage}
          </Col>
        </Row>
      </Container>
    </ThroughFade>
  );
};
