/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */
import { CodeResponse, CodeRightAnswer } from "../../core/code";
import { StoryPage } from "../../core/storyPage";

export const namespace = "game";

export type GameActions =
  | {
      type: "STORY_PAGE_SUCCESS";
      payload: StoryPage;
    }
  | {
      type: "CODE_REVIEW_SUCCESS";
      payload: CodeResponse;
    }
  | {
      type: "CODE_SHOW_ME_ANSWER";
      payload: CodeRightAnswer;
    };
