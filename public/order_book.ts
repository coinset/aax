import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver } from "./_utils.ts";

const MARKET_ORDERBOOK = "market/orderbook";

export type OrderBookOptions = {
  symbol: `${string}FP`;
  level: 20 | 50;
};
export type OrderBookResponse = {
  e: string;
  t: number;
  asks: [number, number][];
  bids: [number, number][];
};

const reviver: Reviver = (key, value) => {
  if (["asks", "bids"].includes(key) && Array.isArray(value)) {
    return value.map((v) => Array.isArray(v) ? v.map(Number) : v);
  }

  return value;
};

export function fetchOrderBook(
  { symbol, level }: OrderBookOptions,
  init?: RequestInit,
): Promise<OrderBookResponse> {
  const url = new URL(MARKET_ORDERBOOK, BASE_URL);

  url.searchParams.set("symbol", symbol);
  url.searchParams.set("level", String(level));

  return jsonFetch(url, init, {
    parseJson: reviver,
  });
}
