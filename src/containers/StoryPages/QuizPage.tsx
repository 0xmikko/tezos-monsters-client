/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import ReactMarkdown from "react-markdown";
import { MagicButton } from "../../components/Button/MagicButton";
import "./StoryPage.css";
import { StoryPage } from "../../core/storyPage";
import { Answer } from "../../core/answer";

interface QuizPageProps {
  data: StoryPage;
  onAnswerClicked: (a: Answer) => void;
}
export const QuizPage: React.FC<QuizPageProps> = ({
  data,
  onAnswerClicked,
}) => {
  const answersRendered = (data.answers || []).map((e) => (
    <>
      <MagicButton title={e.name} onClick={() => onAnswerClicked(e)} />
      <br />
    </>
  ));

  return (
    <div className={"quiz_page"}>
      <h2>{data.header}</h2>
      <ReactMarkdown>{data.text}</ReactMarkdown>

      {answersRendered}
    </div>
  );
};
