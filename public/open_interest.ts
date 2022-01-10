import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver, SuccessResponse } from "./_utils.ts";
import { isString } from "../deps.ts";

const FUTURES_POSITION_OPEN_INTEREST = "futures/position/openInterest";

export type OpenInterestOptions = {
  symbol: `${string}FP`;
};
export type OpenInterestResponse = SuccessResponse<{
  symbol: string;
  openInterest: number;
  openInterestUSD: number;
}>;

const reviver: Reviver = (key, value) => {
  if (["openInterest", "openInterestUSD"].includes(key) && isString(value)) {
    return Number(value);
  }

  return value;
};

export function fetchOpenInterest(
  { symbol }: OpenInterestOptions,
  init?: RequestInit,
): Promise<OpenInterestResponse> {
  const url = new URL(FUTURES_POSITION_OPEN_INTEREST, BASE_URL);

  url.searchParams.set("symbol", symbol);

  return jsonFetch(url, init, {
    parseJson: reviver,
  });
}
