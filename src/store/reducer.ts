/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import {combineReducers} from 'redux';
import auth from './auth/reducer';
// import chats from './chats/reducer';
import profile from './profile/reducer';
import operations from './operations/reducer';
import stories from './stories/reducer';

export default combineReducers({
  auth,
  profile,
  operations,
  stories
});
