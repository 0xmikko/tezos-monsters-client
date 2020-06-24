/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Media } from "react-bootstrap";
import { BookView } from "../../containers/StoryPages/BookView";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import actions from "../../store/actions";
import { CodePage } from "../../containers/CodePage/CodePages";

export const StoryScreen: React.FC = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state: RootState) => state.profile);
  const { currentPage } = profile;

  useEffect(() => {
    dispatch(actions.game.getCurrentPage());
  }, [currentPage]);

  const data = useSelector((state: RootState) => state.game.storyPage);

  if (data === undefined) return <>"Loading"</>;
  const view = data.isCodePage ? (
    <CodePage data={data} />
  ) : (
    <BookView data={data} />
  );

  return (
    <Container fluid style={{ backgroundColor: "#000", overflow: "hidden" }}>
      {view}
    </Container>
  );
};
