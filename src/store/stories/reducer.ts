/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import { createDataLoaderReducer } from "../dataloader/reducer";
import { StoryPage } from "../../core/storyPage";
import { STORIES_PREFIX } from "./";

export default createDataLoaderReducer<StoryPage>(STORIES_PREFIX);
