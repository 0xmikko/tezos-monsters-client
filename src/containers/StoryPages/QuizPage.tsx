/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import ReactMarkdown from "react-markdown";
import { MagicButton } from "../../components/Button/MagicButton";
import { StoryPage } from "../../core/storyPage";
import { Answer } from "../../core/answer";
import styled from "styled-components";

interface QuizPageProps {
  data: StoryPage;
  onAnswerClicked: (a: Answer) => void;
  extraComponent?: React.ReactElement[];
}
export const QuizPage: React.FC<QuizPageProps> = ({
  data,
  onAnswerClicked,
    extraComponent
}) => {
  const answersRendered = (data.answers || []).map((e) => (
    <>
      <MagicButton title={e.name} onClick={() => onAnswerClicked(e)} />
    </>
  ));

  return (
    <div className={"quiz_page"}>
      <h2>{data.header}</h2>
      <ReactMarkdown>{data.text}</ReactMarkdown>
        {extraComponent}

      {answersRendered}
      <div style={{height: 100}} />
    </div>
  );
};

const MarkdownStyles = styled.div`
& > p { font-size: 35pt; }
`
