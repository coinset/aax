import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver } from "./_utils.ts";
import { isString } from "../deps.ts";

const MARKET_TICKERS = "market/tickers";

export type TickersResponse = {
  e: "tickers";
  t: number;
  tickers: {
    a: number;
    c: number;
    d: number;
    h: number;
    l: number;
    o: number;
    s: string;
    v: number;
  }[];
};

const reviver: Reviver = (key, value) => {
  if (["a", "c", "d", "h", "l", "o", "v"].includes(key) && isString(value)) {
    return Number(value);
  }

  return value;
};

export function fetchTickers(
  init?: RequestInit,
): Promise<TickersResponse> {
  const url = new URL(MARKET_TICKERS, BASE_URL);

  return jsonFetch(url, init, {
    parseJson: reviver,
  });
}
