/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

export function intWithCommas(x: number | undefined): string {
  if (x === undefined) return "";

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function floatWithCommas(x: number | undefined): string {
  if (x === undefined) return "";
  const parts = x.toString().split(".");

  return (
    parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
    "." +
    (parts[1] || "00")
  );
}
