/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

export interface Code {
    code: string,
    syntax: string,
    entrypoint: string,
    parameters:string,
    storage: string,
}

export interface CodeResponse {
    result: string,
    error: boolean,
}

export interface CodeRightAnswer {
    code: string,

}
