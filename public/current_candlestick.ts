import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver } from "./_utils.ts";
import { isString } from "../deps.ts";

const MARKET_CANDLES = "market/candles";

export type CurrentCandlestickOptions = {
  symbol: `${string}FP`;
  timeFrame:
    | "1m"
    | "3m"
    | "5m"
    | "15m"
    | "30m"
    | "1h"
    | "2h"
    | "3h"
    | "4h"
    | "8h"
    | "1d";
};
export type CurrentCandlestickResponse = {
  c: number;
  e: string;
  h: number;
  l: number;
  o: number;
  s: number;
  t: number;
  v: number;
};

const reviver: Reviver = (key, value) => {
  if (["c", "h", "l", "o", "v"].includes(key) && isString(value)) {
    return Number(value);
  }

  return value;
};

export function fetchCurrentCandlestick(
  { symbol, timeFrame }: CurrentCandlestickOptions,
  init?: RequestInit,
): Promise<CurrentCandlestickResponse> {
  const url = new URL(MARKET_CANDLES, BASE_URL);

  url.searchParams.set("symbol", symbol);
  url.searchParams.set("timeFrame", timeFrame);

  return jsonFetch(url, init, {
    parseJson: reviver,
  });
}
