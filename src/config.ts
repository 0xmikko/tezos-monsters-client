/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

export const BACKEND_ADDR =
    process.env.NODE_ENV === "development"
        ? "https://t-monsters-stage.herokuapp.com"
        : "https://t-monsters.herokuapp.com";

export const SSO_ADDR =
    process.env.NODE_ENV === "development"
        ? "https://t-monsters-stage.herokuapp.com"
        : "https://t-monsters.herokuapp.com";

export const GA_TRACKER = "UA-171397157-1";
export const FB_PIXEL = "297559898107412";

