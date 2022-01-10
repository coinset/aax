import { fetchTickers } from "./tickers.ts";
import { anyArray, anyNumber, anyString, expect, test } from "../dev_deps.ts";

test("fetchTickers", async () => {
  await expect(fetchTickers()).resolves.toEqual({
    e: "tickers",
    t: anyNumber(),
    tickers: anyArray({
      a: anyNumber(),
      c: anyNumber(),
      d: anyNumber(),
      h: anyNumber(),
      l: anyNumber(),
      o: anyNumber(),
      s: anyString(),
      v: anyNumber(),
    }),
  });
});
