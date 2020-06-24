/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import ReactMarkdown from "react-markdown";
import { StoryPage } from "../../core/storyPage";

interface TextPageProps {
  data: StoryPage;
}
export const TextPage: React.FC<TextPageProps> = ({
  data,
}) => {
  return (
    <div className={"text_page"}>
      <h2>{data.header}</h2>
      <ReactMarkdown escapeHtml={false}>{data.text}</ReactMarkdown>
    </div>
  );
};
