/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import {StoryPage} from "./storyPage";

export interface Answer {
    id: string;
    index: number;
    name: string;
    isCorrect: boolean;
    message: string;
    icon: string;
    storyId?: string;
    storyPage? : StoryPage;
}

export const AnswerDefault : Answer = {
    id: 'new',
    index: 1,
    name: '',
    isCorrect: false,
    message: '',
    icon: '',
}
