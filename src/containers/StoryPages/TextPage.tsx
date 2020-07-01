/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { StoryPage } from "../../core/storyPage";
import styled from "styled-components";

interface TextPageProps {
  data: StoryPage;
}
export const TextPage: React.FC<TextPageProps> = ({ data }) => {
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef !==null  && myRef.current !== null) {
        // @ts-ignore
      myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [data.header]);

  return (
    <div className={"text_page"} >
      <Wrapper>
        <h2 ref={myRef} style={{paddingTop: '95px'}}>{data.header}</h2>
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
