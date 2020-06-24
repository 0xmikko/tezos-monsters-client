/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import * as monaco from 'monaco-editor';
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { withTheme } from 'styled-components';


export const Editor = withTheme(
  (props: {
    value: string;
    language?: string;
    onChange?: (value: string) => void;
    theme: { mode: string };
    style?: object
  }) => {
    let containerRef = useRef(null);
    const isLightTheme = props.theme.mode === 'light';
    const background = isLightTheme ? "#eff7ff" : "#3b454e40";
    const lineHighlightBackground = isLightTheme ? "#cee3ff" : "#63768840";
    const lineNumberColor = "#888";

    const model = monaco.editor.createModel(props.value, props.language);

    monaco.editor.defineTheme("ligoTheme", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": background,
        "editor.lineHighlightBackground": lineHighlightBackground,
        "editorLineNumber.foreground": lineNumberColor
      }
    });

    monaco.editor.setTheme("ligoTheme");

    useEffect(() => {
      const cleanupFunc: Array<() => void> = [];
      const htmlElement = (containerRef.current as unknown) as HTMLElement;

      const editor = monaco.editor.create(htmlElement, {
        readOnly: false,
        model: model,
        automaticLayout: true,
        minimap: {
          enabled: false
        }
      });

      const { dispose } = editor.onDidChangeModelContent(() => {
        if (props.onChange) {
          props.onChange(editor.getValue());
        }
      });

      cleanupFunc.push(dispose);

      return function cleanUp() {
        cleanupFunc.forEach(f => f());
      };
    }, []);

    return (
      <div ref={containerRef} style={props.style}>
        <Helmet>
          <style type="text/css">
            {`
              .monaco-editor .current-line ~ .line-numbers {
                color: ${lineNumberColor};
              }

              .monaco-editor .margin-view-overlays .current-line,
              .monaco-editor .view-overlays .current-line {
                background-color: ${lineHighlightBackground};
              }
            `}
          </style>
        </Helmet>
      </div>
    );
  }
);
