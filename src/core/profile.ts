/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */


export interface Profile {
    id: string;
    name: string;
    avatar?: string;
    tezosAddress: string;
    currentStep: number;
    currentPage: string;
    gold: number;
    shares: number;
    isStepSolved: boolean;
}
