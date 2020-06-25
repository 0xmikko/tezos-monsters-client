/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import ReactMarkdown from "react-markdown";
import { StoryPage } from "../../core/storyPage";
import styled from "styled-components";

interface TextPageProps {
  data: StoryPage;
}
export const TextPage: React.FC<TextPageProps> = ({ data }) => {
  return (
    <div className={"text_page"}>
      <Wrapper>
        <h2>{data.header}</h2>
        <ReactMarkdown escapeHtml={false}>{data.text}</ReactMarkdown>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  .wrapper {
    height: 400vh;
    position: relative;
    padding-bottom: 200px;
  }
`;
