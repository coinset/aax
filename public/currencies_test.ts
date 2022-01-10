import { fetchCurrencies } from "./currencies.ts";
import {
  anyArray,
  anyBoolean,
  anyNumber,
  anyString,
  expect,
  test,
} from "../dev_deps.ts";

test("fetchCurrencies", async () => {
  await expect(fetchCurrencies()).resolves.toEqual({
    code: 1,
    data: anyArray({
      chain: anyString(),
      displayName: anyString(),
      withdrawFee: anyNumber(),
      withdrawMin: anyNumber(),
      otcFee: anyNumber(),
      enableOTC: anyBoolean(),
      visible: anyBoolean(),
      enableTransfer: anyBoolean(),
      transferMin: anyNumber(),
      depositMin: anyNumber(),
      enableWithdraw: anyBoolean(),
      enableDeposit: anyBoolean(),
      addrWithMemo: anyBoolean(),
      withdrawPrecision: anyNumber(),
      currency: anyString(),
      network: anyString(),
      minConfirm: anyNumber(),
    }),
    message: "success",
    ts: anyNumber(),
  });
});
