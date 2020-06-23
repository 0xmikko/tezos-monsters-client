/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import { endpoint, STORIES_PREFIX } from "./";

import {
  createDataLoaderCreateUpdateDataAction,
  createDataLoaderDetailActions,
  createDataLoaderListActions,
} from "../dataloader/actions";

export const getList = createDataLoaderListActions(endpoint, STORIES_PREFIX);

export const getDetails = createDataLoaderDetailActions(
  endpoint + ":id/",
  STORIES_PREFIX
);

