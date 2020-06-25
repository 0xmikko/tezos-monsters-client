/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import { Profile } from "../../core/profile";
import { GameAction } from "./";
import { CodeResponse, CodeRightAnswer } from "../../core/code";
import { StoryPage } from "../../core/storyPage";

export interface CodeState {
  storyPage: StoryPage | undefined;
  response: CodeResponse | undefined;
  answer: CodeRightAnswer | undefined;
}

const initialState: CodeState = {
  storyPage: undefined,
  response: undefined,
  answer: undefined,
};

export default function createReducer(
  state: CodeState = initialState,
  action: GameAction
): CodeState {
  switch (action.type) {
    default:
      return state;

    case "STORY_PAGE_SUCCESS":
      return {
        ...state,
        storyPage: action.payload,
      };
    case "CODE_REVIEW_SUCCESS":
      return {
        ...state,
        response: action.payload,
      };
    case "CODE_REVIEW_RESET":
      return {
        ...state,
        response: undefined,
      };
  }

  return state;
}
