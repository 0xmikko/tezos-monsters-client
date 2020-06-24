/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import axios from 'axios';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Editor } from './editor';
import { CompactLigoIdeProps, DEFAULT_COMPACT_LIGO_IDE_PROPS, ShareParams } from './types';
import YAML from 'yaml';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;



export function CompactLigoIde(props: CompactLigoIdeProps) {

  const shareParams = {
    editor: {
      ...props.editor
    },
  };
  const theme = 'light';


  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Container className="compactLigoIde">
        <Editor
            // @ts-ignore
          value={shareParams.editor.code}
            // @ts-ignore
          language={shareParams.editor.language}
        ></Editor>

      </Container>
    </ThemeProvider>
  );
}
