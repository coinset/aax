import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver, SuccessResponse } from "./_utils.ts";
import { isString } from "../deps.ts";

const CURRENCIES = "currencies";

export type CurrenciesOptions = {
  currency: string;
};

export type CurrenciesResponse = SuccessResponse<
  {
    chain: string;
    displayName: string;
    withdrawFee: number;
    withdrawMin: number;
    otcFee: number;
    enableOTC: boolean;
    visible: boolean;
    enableTransfer: boolean;
    transferMin: number;
    depositMin: number;
    enableWithdraw: boolean;
    enableDeposit: boolean;
    addrWithMemo: boolean;
    withdrawPrecision: number;
    currency: string;
    network: string;
    minConfirm: number;
  }[]
>;

const reviver: Reviver = (key, value) => {
  if (
    [
      "withdrawFee",
      "withdrawMin",
      "otcFee",
      "transferMin",
      "depositMin",
      "withdrawPrecision",
      "minConfirm",
    ]
      .includes(key) &&
    isString(value)
  ) {
    return Number(value);
  }

  return value;
};

export function fetchCurrencies(
  options?: CurrenciesOptions,
  init?: RequestInit,
): Promise<CurrenciesResponse> {
  const url = new URL(CURRENCIES, BASE_URL);

  if (options?.currency) {
    url.searchParams.set("currency", options.currency);
  }

  return jsonFetch(url, init, {
    parseJson: reviver,
  });
}
