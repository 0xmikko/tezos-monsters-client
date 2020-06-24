/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */


import {SocketEmitAction} from "../socketMiddleware";
import {namespace} from "./index";
import {Code} from "../../core/code";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {Action} from "redux";

export const connectSocket = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
    > => async (dispatch) => {
    dispatch({
        type: 'SOCKET_ON',
        namespace,
        event: 'game:currentPage',
        typeOnSuccess: 'STORY_PAGE_SUCCESS',
    });
    dispatch({
        type: 'SOCKET_ON',
        namespace,
        event: 'game:codeReviewResult',
        typeOnSuccess: 'CODE_REVIEW_SUCCESS',
    });
    dispatch({
        type: 'SOCKET_ON',
        namespace,
        event: 'game:codeShowMeAnswer',
        typeOnSuccess: 'CODE_REVIEW_SUCCESS',
    });

};

export const getCurrentPage: (
    opHash?: string,
) => SocketEmitAction = (opHash) => ({
    type: 'SOCKET_EMIT',
    namespace,
    event: 'game:getCurrentPage',
    typeOnFailure: 'GAME_FAILURE',
    payload: {},
    opHash,
});

export const checkQuizAnswer: (
    answer: string,
    opHash?: string,
) => SocketEmitAction = (answer, opHash) => ({
    type: 'SOCKET_EMIT',
    namespace,
    event: 'game:checkQuizAnswer',
    typeOnFailure: 'GAME_FAILURE',
    payload: {answer},
    opHash,
});

export const checkCodeAnswer: (
    code: Code,
    opHash?: string,
) => SocketEmitAction = (code, opHash) => ({
    type: 'SOCKET_EMIT',
    namespace,
    event: 'game:checkCodeAnswer',
    typeOnFailure: 'GAME_FAILURE',
    payload: code,
    opHash,
});
