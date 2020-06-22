/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Media } from "react-bootstrap";
import "./StoryScreen.css";
import { MagicButton } from "../../components/Button/MagicButton";
import { ThroughFade } from "../../components/ThroughFadeEffect/ThroughFade";
import { AnswerReplyModal } from "../../containers/StoryPages/AnswerReplyModal";
import { BookView } from "../../containers/StoryPages/BookView";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../store";
import actions from "../../store/actions";
import {getDetailsItem} from "../../store/dataloader";

export const StoryScreen: React.FC = () => {
    const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const profile = useSelector((state: RootState) => state.profile);
  const {currentPage} = profile;

  useEffect(() => {
      dispatch(actions.stories.getDetails(currentPage))
  }, [currentPage])

    const dataItem = useSelector((state: RootState) =>
        getDetailsItem(state.stories.Details, currentPage)
    );

  const onModalPressed = () => {
    setModalVisible(false);
  };

  if (dataItem === undefined || dataItem.data === undefined) return <>"Loading"</>
  const view = dataItem.data.isCodePage ? "EEE" : <BookView data={dataItem.data} />

  return (
    <Container fluid style={{ backgroundColor: "#000" }}>
      <AnswerReplyModal
        header={"You are wrong"}
        text={"Hi"}
        onPress={onModalPressed}
        visible={modalVisible}
      />
        {view}
    </Container>
  );
};
