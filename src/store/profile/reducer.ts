/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import {Profile} from '../../core/profile';
import {ProfileActions} from './';

export interface ProfileState extends Profile {}

const initialState: ProfileState = {
  id: '',
  name: 'Loading',
  avatar: '',
  tezosAddress: '',
  currentStep: 1,
  currentPage: '',
  gold: 0,
  shares: 0,
};


export default function createReducer(
  state: ProfileState = initialState,
  action: ProfileActions,
): ProfileState {
  switch (action.type) {
    case 'PROFILE_REQUEST':
      return state;
    case 'PROFILE_SUCCESS':
      return action ? action.payload ? action.payload : state : state;
    case 'PROFILE_FAILURE':
      return {
        ...state,
      };
    case 'PROFILE_LOGOUT':
      return initialState;
  }

  return state;
}
